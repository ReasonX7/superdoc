// @ts-check
import { findOrCreateRelationship } from '../../../../../../parts/adapters/relationships-mutation';

/**
 * @typedef {import('prosemirror-state').Transaction} Transaction
 * @typedef {import('../../../../../types').ValidatorLogger} ValidatorLogger
 * @typedef {import('../../../../../types').Editor} Editor
 * @typedef {import('../../../../../types').ValidatorFunction} ValidatorFunction
 * @typedef {import('../../../../../types').ElementInfo} ElementInfo
 */

/**
 * Ensure all link marks have a valid rId attribute.
 * @param {ElementInfo[]} links
 * @param {Editor} editor
 * @param {Transaction} tr
 * @param {ValidatorLogger} logger
 * @returns {{ modified: boolean, results: string[] }}
 */
export function ensureValidLinkRID(links, editor, tr, logger) {
  let modified = false;
  const results = [];

  links.forEach(({ mark, from, to }) => {
    const { rId, href, anchor } = mark.attrs;

    if (!rId && href && !anchor) {
      const newId = findOrCreateRelationship(editor, 'link-rid:ensureValidLinkRID', {
        target: href,
        type: 'hyperlink',
      });

      if (newId) {
        logger.debug('Assigned rId for link:', newId, 'from pos:', from, 'to pos:', to);

        const linkMarkType = editor.schema.marks.link;
        const newMark = linkMarkType.create({
          ...mark.attrs,
          rId: newId,
        });

        tr.removeMark(from, to, linkMarkType);
        tr.addMark(from, to, newMark);

        results.push(`Added missing rId to link from pos ${from} to ${to}`);
        modified = true;
      }
    }
  });

  return { modified, results };
}
