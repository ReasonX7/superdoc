/**
 * Bootstrap the parts runtime: descriptor registration + revision init.
 *
 * Called from Editor.ts after converter initialization. Safe to call
 * multiple times — both `registerPartDescriptor` and `initRevision`
 * are idempotent.
 */

import type { Editor } from '../Editor';
import { registerPartDescriptor } from './registry/part-registry';
import { stylesPartDescriptor } from './adapters/styles-part-descriptor';
import { settingsPartDescriptor } from './adapters/settings-part-descriptor';
import { relsPartDescriptor } from './adapters/rels-part-descriptor';
import { numberingPartDescriptor } from './adapters/numbering-part-descriptor';
import { contentTypesPartDescriptor } from './adapters/content-types-part-descriptor';
import { footnotesPartDescriptor, endnotesPartDescriptor } from './adapters/notes-part-descriptor';
import { registerStaticInvalidationHandlers } from './invalidation/invalidation-handlers';
import { initRevision, trackRevisions } from '../../document-api-adapters/plan-engine/revision-tracker';

export function initPartsRuntime(editor: Editor): void {
  registerPartDescriptor(stylesPartDescriptor);
  registerPartDescriptor(settingsPartDescriptor);
  registerPartDescriptor(relsPartDescriptor);
  registerPartDescriptor(numberingPartDescriptor);
  registerPartDescriptor(contentTypesPartDescriptor);
  registerPartDescriptor(footnotesPartDescriptor);
  registerPartDescriptor(endnotesPartDescriptor);
  registerStaticInvalidationHandlers();
  initRevision(editor);
  trackRevisions(editor);
}
