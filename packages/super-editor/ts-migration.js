import * as fs from 'node:fs';
import * as path from 'node:path';

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
      continue;
    }

    if (!entry.name.endsWith('.js')) {
      continue;
    }

    const newName = entry.name.replace(/\.js$/, '.ts');
    const newPath = path.join(dir, newName);

    const content = await fs.promises.readFile(fullPath, 'utf8');

    // Replace import/export references
    // content = content
    //   .replace(/from\s+["'](.+?)\.js["']/g, 'from "$1.ts"')
    //   .replace(/import\(["'](.+?)\.js["']\)/g, 'import("$1.ts")')
    //   .replace(/require\(["'](.+?)\.js["']\)/g, 'require("$1.ts")');

    await fs.promises.writeFile(fullPath, content, 'utf8');

    await fs.promises.rename(fullPath, newPath);

    console.log(`Renamed: ${fullPath} → ${newPath}`);
  }
}

async function main() {
  const targetDir = process.argv[2] || path.join(process.cwd(), 'src');
  await processDirectory(targetDir);
}

main().catch(console.error);
