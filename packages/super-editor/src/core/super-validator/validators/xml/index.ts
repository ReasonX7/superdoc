// @ts-check
import { createNumberingValidator } from './numbering/numbering-validator';
import { createRelationshipsValidator } from './relationships/relationships-validator';

/**
 * @typedef {Object} XmlValidator
 * @property {import('../../types').XmlValidator} numberingValidator - Validator for numbering.xml file.
 */
export const XmlValidators = {
  numberingValidator: createNumberingValidator,
  relationshipsValidator: createRelationshipsValidator,
};
