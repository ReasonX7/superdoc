// @ts-check
import { NodeTranslator } from '@translator';
import {
  createNestedPropertiesTranslator,
  createIntegerAttributeHandler,
  createBooleanAttributeHandler,
} from '@converter/v3/handlers/utils';
import { translator as wLvlStartTranslator } from '../../w/start/lvlStart-translator';
import { translator as wLvlRestartTranslator } from '../../w/lvlRestart/lvlRestart-translator';
import { translator as wLvlPicBulletId } from '../../w/lvlPicBulletId/lvlPicBulletId-translator';
import { translator as wIsLglTranslator } from '../../w/isLgl/isLgl-translator';
import { translator as wPStyleTranslator } from '../../w/pStyle/pStyle-translator';
import { translator as wSuffTranslator } from '../../w/suff/suff-translator';
import { translator as wLvlTextTranslator } from '../../w/lvlText/lvlText-translator';
import { translator as wLvlJcTranslator } from '../../w/lvlJc/lvlJc-translator';
import { translator as wNumFmtTranslator } from '../../w/numFmt/numFmt-translator';
import { translator as wLegacyTranslator } from '../../w/legacy/legacy-translator';
import { translator as wPPrTranslator } from '../../w/pPr';
import { translator as wRPrTranslator } from '../../w/rpr';

// Property translators for w:lvl child elements
// Each translator handles a specific property
/** @type {import('@translator').NodeTranslator[]} */
const propertyTranslators = [
  wLvlStartTranslator,
  wLvlRestartTranslator,
  wLvlPicBulletId,
  wIsLglTranslator,
  wPStyleTranslator,
  wSuffTranslator,
  wLvlTextTranslator,
  wLvlJcTranslator,
  wNumFmtTranslator,
  wLegacyTranslator,
  wPPrTranslator,
  wRPrTranslator,
];

const attributeHandlers = [
  createIntegerAttributeHandler('w:ilvl'),
  createIntegerAttributeHandler('w:tplc'),
  createBooleanAttributeHandler('w:tentative'),
];

/**
 * The NodeTranslator instance for the w:lvl element.
 * @type {import('@translator').NodeTranslator}
 */
export const translator = NodeTranslator.from(
  createNestedPropertiesTranslator('w:lvl', 'lvl', propertyTranslators, {}, attributeHandlers),
);
