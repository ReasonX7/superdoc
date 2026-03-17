import { Extension } from '../Extension';
import * as commands from '../commands/index';

export const Commands = Extension.create({
  name: 'commands',

  addCommands() {
    return { ...commands };
  },
});
