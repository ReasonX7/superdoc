// @ts-check
import { ensureValidLinkRID } from './rules/index';

/**
 * @typedef {import('prosemirror-state').Transaction} Transaction
 * @typedef {import('../../../../types').ValidatorLogger} ValidatorLogger
 * @typedef {import('../../../../types').Editor} Editor
 * @typedef {import('../../../../types').ValidatorFunction} ValidatorFunction
 * @typedef {import('../../../../types').ElementInfo} ElementInfo
 */

/**
 * Link mark validations
 *
 * 1. Ensure that every link mark has a valid rId attribute.
 *
 * @param {{ editor: Editor, logger: ValidatorLogger }} ctx
 * @returns {ValidatorFunction}
 */
export function createLinkMarkValidator({ editor, logger }) {
  /** @type {ValidatorFunction} */
  const validator = (tr, analysis) => {
    const links = analysis.link || [];

    const ruleResults = [ensureValidLinkRID(links, editor, tr, logger)];

    const modified = ruleResults.some((r) => r.modified);
    const results = ruleResults.flatMap((r) => r.results);

    return { modified, results };
  };

  // Define the required elements for this validator
  validator.requiredElements = {
    marks: ['link'],
  };

  return validator;
}
