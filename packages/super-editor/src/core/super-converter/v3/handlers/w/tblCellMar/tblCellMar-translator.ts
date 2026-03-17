import { NodeTranslator } from '@translator';
import { createNestedPropertiesTranslator } from '../../utils';
import { marginBottomTranslator } from '../bottom/index';
import { marginEndTranslator } from '../end/index';
import { marginLeftTranslator } from '../left/index';
import { marginRightTranslator } from '../right/index';
import { marginStartTranslator } from '../start/index';
import { marginTopTranslator } from '../top/index';

const propertyTranslators = [
  marginBottomTranslator,
  marginEndTranslator,
  marginLeftTranslator,
  marginRightTranslator,
  marginStartTranslator,
  marginTopTranslator,
];

export const translator = NodeTranslator.from(
  createNestedPropertiesTranslator('w:tblCellMar', 'cellMargins', propertyTranslators),
);
