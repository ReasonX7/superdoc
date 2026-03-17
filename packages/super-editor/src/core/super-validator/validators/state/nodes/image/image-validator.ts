// @ts-check
import { ensureValidImageRID } from './rules/index';

/**
 * @typedef {import('prosemirror-model').Node} Node
 * @typedef {import('prosemirror-state').Transaction} Transaction
 * @typedef {import('../../../../types').ValidatorLogger} ValidatorLogger
 * @typedef {import('../../../../types').Editor} Editor
 * @typedef {import('../../../../types').ValidatorFunction} ValidatorFunction
 * @typedef {import('../../../../types').ElementInfo} ElementInfo
 */

/**
 * Image node validations
 *
 * 1. Ensure that every image node has a valid rId attribute.
 *
 * @param {{ editor: Editor, logger: ValidatorLogger }} ctx
 * @returns {ValidatorFunction}
 */
export function createImageNodeValidator({ editor, logger }) {
  /** @type {ValidatorFunction} */
  const validator = (tr, analysis) => {
    const images = analysis.image || [];

    const ruleResults = [ensureValidImageRID(images, editor, tr, logger)];

    const modified = ruleResults.some((r) => r.modified);
    const results = ruleResults.flatMap((r) => r.results);

    return { modified, results };
  };

  // Define the required elements for this validator
  validator.requiredElements = {
    nodes: ['image'],
  };

  return validator;
}
