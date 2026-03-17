// @ts-check
import { createImageNodeValidator } from './nodes/image/image-validator';
import { createLinkMarkValidator } from './nodes/link/link-validator';

/**
 * @typedef {Object} StateValidators
 * @property {import('../../types').StateValidator} imageNodeValidator - Validator for image nodes.
 * @property {import('../../types').StateValidator} linkMarkValidator - Validator for link marks.
 */
export const StateValidators = {
  imageNodeValidator: createImageNodeValidator,
  linkMarkValidator: createLinkMarkValidator,
};
