import { preProcessPageInstruction } from './page-preprocessor';
import { preProcessNumPagesInstruction } from './num-pages-preprocessor';
import { preProcessPageRefInstruction } from './page-ref-preprocessor';
import { preProcessHyperlinkInstruction } from './hyperlink-preprocessor';
import { preProcessTocInstruction } from './toc-preprocessor';
import { preProcessIndexInstruction } from './index-preprocessor';
import { preProcessXeInstruction } from './xe-preprocessor';
import { preProcessTcInstruction as preProcessTcFieldInstruction } from './tc-preprocessor';
import { preProcessRefInstruction } from './ref-preprocessor';
import { preProcessNoterefInstruction } from './noteref-preprocessor';
import { preProcessStylerefInstruction } from './styleref-preprocessor';
import { preProcessSeqInstruction } from './seq-preprocessor';
import { preProcessCitationInstruction } from './citation-preprocessor';
import { preProcessBibliographyInstruction } from './bibliography-preprocessor';
import { preProcessTaInstruction } from './ta-preprocessor';
import { preProcessToaInstruction } from './toa-preprocessor';

/**
 * @callback InstructionPreProcessor
 * @param {import('../../v2/types/index').OpenXmlNode[]} nodesToCombine
 * @param {string} instruction
 * @param {import('../../v2/docxHelper').ParsedDocx} [docx] - The docx object.
 * @returns {import('../../v2/types/index').OpenXmlNode[]}
 */

/**
 * Gets the correct pre-processor function for a given instruction.
 * @param {string} instruction The instruction text.
 * @returns {InstructionPreProcessor | null} The pre-processor function or null if not found.
 */
export const getInstructionPreProcessor = (instruction) => {
  const instructionType = instruction.split(' ')[0];
  switch (instructionType) {
    case 'PAGE':
      return preProcessPageInstruction;
    case 'NUMPAGES':
      return preProcessNumPagesInstruction;
    case 'PAGEREF':
      return preProcessPageRefInstruction;
    case 'HYPERLINK':
      return preProcessHyperlinkInstruction;
    case 'TOC':
      return preProcessTocInstruction;
    case 'INDEX':
      return preProcessIndexInstruction;
    case 'XE':
      return preProcessXeInstruction;
    case 'TC':
      return preProcessTcFieldInstruction;
    case 'REF':
      return preProcessRefInstruction;
    case 'NOTEREF':
      return preProcessNoterefInstruction;
    case 'STYLEREF':
      return preProcessStylerefInstruction;
    case 'SEQ':
      return preProcessSeqInstruction;
    case 'CITATION':
      return preProcessCitationInstruction;
    case 'BIBLIOGRAPHY':
      return preProcessBibliographyInstruction;
    case 'TA':
      return preProcessTaInstruction;
    case 'TOA':
      return preProcessToaInstruction;
    default:
      return null;
  }
};
