import { NodeTranslator } from '@translator';
import { createNestedPropertiesTranslator } from '../../utils';

import { marginBottomTranslator } from '../bottom/index';
import { marginEndTranslator } from '../end/index';
import { marginLeftTranslator } from '../left/index';
import { marginRightTranslator } from '../right/index';
import { marginStartTranslator } from '../start/index';
import { marginTopTranslator } from '../top/index';

// Property translators for w:tcMar child elements
// Each translator handles a specific margin property of the table cell
/** @type {import('@translator').NodeTranslator[]} */
const propertyTranslators = [
  marginBottomTranslator,
  marginEndTranslator,
  marginLeftTranslator,
  marginRightTranslator,
  marginStartTranslator,
  marginTopTranslator,
];

/**
 * The NodeTranslator instance for the w:tcMar element.
 * @type {import('@translator').NodeTranslator}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-376/} "Fundamentals And Markup Language Reference", page 462
 */
export const translator = NodeTranslator.from(
  createNestedPropertiesTranslator('w:tcMar', 'cellMargins', propertyTranslators),
);
