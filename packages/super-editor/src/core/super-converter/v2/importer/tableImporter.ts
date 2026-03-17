import { generateV2HandlerEntity } from '@converter/v3/handlers/utils';
import { translator as tableTranslator } from '@converter/v3/handlers/w/tbl/tbl-translator';

/**
 * @type {import("docxImporter").NodeHandlerEntry}
 */
export const tableNodeHandlerEntity = generateV2HandlerEntity('tableNodeHandler', tableTranslator);
