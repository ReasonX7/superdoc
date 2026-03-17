/**
 * Part-sync collaboration module.
 *
 * Synchronizes non-document OOXML parts via Yjs CRDT state.
 * All remote applies route through the centralized mutation core.
 */

export { bootstrapPartSync } from './bootstrap';
export type { PartSyncHandle } from './bootstrap';
export { isApplyingRemotePartChanges } from './consumer';
export { isMigrationNeeded, migrateMetaDocxToParts } from './migration-from-meta-docx';
export { seedPartsFromEditor } from './seed-parts';
export type { PartEnvelope, PartsMigrationMeta, PartsCapability, PartSyncDegradedEvent } from './types';
export { PARTS_MAP_KEY, META_MAP_KEY, SOURCE_COLLAB_REMOTE_PREFIX } from './constants';
