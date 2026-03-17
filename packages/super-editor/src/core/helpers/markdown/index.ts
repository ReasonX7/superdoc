/**
 * Markdown ↔ ProseMirror conversion module.
 *
 * Public API:
 *  - `markdownToPmDoc` — full document conversion (for body replacement)
 *  - `markdownToPmFragment` — fragment conversion (for insertion)
 *  - `parseMarkdownToAst` — raw mdast parsing (for advanced use)
 *  - `proseMirrorDocToMdast` — ProseMirror → mdast conversion (for export)
 */

export { markdownToPmDoc, markdownToPmFragment } from './markdownToPmContent';
export { parseMarkdownToAst } from './parseMarkdownAst';
export { proseMirrorDocToMdast } from './proseMirrorToMdast';
export { normalizeFixedWidthTables } from './normalizeFixedWidthTables';
export type {
  MarkdownConversionOptions,
  MarkdownConversionResult,
  MarkdownFragmentResult,
  MarkdownDiagnostic,
} from './types';
