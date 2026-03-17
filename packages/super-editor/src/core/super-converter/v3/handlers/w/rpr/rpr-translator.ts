import { NodeTranslator } from '@translator';
import { createNestedPropertiesTranslator } from '@converter/v3/handlers/utils';
import { translator as boldTranslator } from '../b/b-translator';
import { translator as boldCsTranslator } from '../bCs/bCs-translator';
import { translator as borderTranslator } from '../bdr/bdr-translator';
import { translator as italicTranslator } from '../i/i-translator';
import { translator as underlineTranslator } from '../u/u-translator';
import { translator as strikeTranslator } from '../strike/strike-translator';
import { translator as dStrikeTranslator } from '../dstrike/dstrike-translator';
import { translator as colorTranslator } from '../color/color-translator';
import { translator as highlightTranslator } from '../highlight/highlight-translator';
import { translator as fontFamilyTranslator } from '../rFonts/rFonts-translator';
import { translator as runStyleTranslator } from '../rStyle/rstyle-translator';
import { translator as fontSizeTranslator } from '../sz/sz-translator';
import { translator as fontSizeCsTranslator } from '../szcs/szcs-translator';
import { translator as capsTranslator } from '../caps/caps-translator';
import { translator as shdTranslator } from '../shd/shd-translator';
import { translator as langTranslator } from '../lang/lang-translator';
import { translator as letterSpacingTranslator } from '../spacing/letter-spacing-translator';
import { translator as vertAlignTranslator } from '../vertAlign/vertAlign-translator';
import { translator as smallCapsTranslator } from '../smallCaps/smallCaps-translator';
import { translator as snapToGridTranslator } from '../snapToGrid/snapToGrid-translator';
import { translator as embossTranslator } from '../emboss/emboss-translator';
import { translator as imprintTranslator } from '../imprint/imprint-translator';
import { translator as noProofTranslator } from '../noProof/noProof-translator';
import { translator as oMathTranslator } from '../oMath/oMath-translator';
import { translator as outlineTranslator } from '../outline/outline-translator';
import { translator as shadowTranslator } from '../shadow/shadow-translator';
import { translator as vanishTranslator } from '../vanish/vanish-translator';
import { translator as specVanishTranslator } from '../specVanish/specVanish-translator';
import { translator as effectTranslator } from '../effect/effect-translator';
import { translator as emTranslator } from '../em/em-translator';
import { translator as wTranslator } from '../w/w-translator';
import { translator as kernTranslator } from '../kern/kern-translator';
import { translator as positionTranslator } from '../position/position-translator';
import { translator as fitTextTranslator } from '../fitText/fitText-translator';
import { translator as eastAsianLayoutTranslator } from '../eastAsianLayout/eastAsianLayout-translator';
import { translator as rtlTranslator } from '../rtl/rtl-translator';
import { translator as csTranslator } from '../cs/cs-translator';
import { translator as iCsTranslator } from '../iCs/iCs-translator';
import { translator as webHiddenTranslator } from '../webHidden/webHidden-translator';
import { translator as ligaturesTranslator } from '../w14-ligatures/ligatures-translator';
import { translator as numFormTranslator } from '../w14-numForm/numForm-translator';
import { translator as numSpacingTranslator } from '../w14-numSpacing/numSpacing-translator';
import { translator as stylisticSetsTranslator } from '../w14-stylisticSets/stylisticSets-translator';
import { translator as cntxtAltsTranslator } from '../w14-cntxtAlts/cntxtAlts-translator';

// Property translators for w:rPr child elements
// Each translator handles a specific property of the run properties
/** @type {import('@translator').NodeTranslator[]} */
export const propertyTranslators = [
  boldCsTranslator,
  boldTranslator,
  borderTranslator,
  capsTranslator,
  colorTranslator,
  csTranslator,
  dStrikeTranslator,
  eastAsianLayoutTranslator,
  effectTranslator,
  emTranslator,
  embossTranslator,
  fitTextTranslator,
  fontFamilyTranslator,
  fontSizeCsTranslator,
  fontSizeTranslator,
  highlightTranslator,
  imprintTranslator,
  italicTranslator,
  iCsTranslator,
  kernTranslator,
  langTranslator,
  letterSpacingTranslator,
  noProofTranslator,
  oMathTranslator,
  outlineTranslator,
  positionTranslator,
  rtlTranslator,
  runStyleTranslator,
  shadowTranslator,
  shdTranslator,
  smallCapsTranslator,
  snapToGridTranslator,
  specVanishTranslator,
  strikeTranslator,
  underlineTranslator,
  vanishTranslator,
  vertAlignTranslator,
  ligaturesTranslator,
  numFormTranslator,
  numSpacingTranslator,
  stylisticSetsTranslator,
  cntxtAltsTranslator,
  webHiddenTranslator,
  wTranslator,
];

/**
 * The NodeTranslator instance for the w:rPr element.
 * @type {import('@translator').NodeTranslator}
 */
export const translator = NodeTranslator.from(
  createNestedPropertiesTranslator('w:rPr', 'runProperties', propertyTranslators),
);
