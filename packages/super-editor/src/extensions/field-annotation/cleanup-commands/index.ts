import * as cleanUpListsCommands from './cleanUpListsWithAnnotations';
import * as cleanUpParagraphCommands from './cleanUpParagraphWithAnnotations';

export const commands = {
  ...cleanUpListsCommands,
  ...cleanUpParagraphCommands,
};

export * from './cleanUpListsWithAnnotations';
export * from './cleanUpParagraphWithAnnotations';
