import type { Editor } from '../core/Editor';
import type { SDGetInput, SDDocument } from '@superdoc/document-api';
import { projectDocument } from './helpers/sd-projection';

/**
 * Read the full document as an SDDocument structure.
 *
 * @param editor - The editor instance.
 * @param input - Get input with optional read options.
 * @returns An SDDocument with body content projected into SDM/1 canonical shapes.
 */
export function getAdapter(editor: Editor, input: SDGetInput): SDDocument {
  return projectDocument(editor, input.options);
}
