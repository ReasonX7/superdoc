/**
 * Centralized document parts system.
 *
 * All non-`word/document.xml` runtime mutations route through this module.
 */

// Types
export type {
  PartId,
  PartSectionId,
  PartDescriptor,
  CommitContext,
  DeleteContext,
  MutatePartRequest,
  CreatePartRequest,
  DeletePartRequest,
  PartOperation,
  MutatePartsRequest,
  MutatePartResult,
  MutatePartsResult,
  PartChangedEvent,
} from './types';

// Registry
export {
  registerPartDescriptor,
  getPartDescriptor,
  hasPartDescriptor,
  clearPartDescriptors,
} from './registry/part-registry';

// Store
export { getPart, hasPart, setPart, removePart, clonePart } from './store/part-store';

// Mutation
export { mutatePart, mutateParts } from './mutation/mutate-part';

// Invalidation
export {
  registerInvalidationHandler,
  removeInvalidationHandler,
  applyPartInvalidation,
  clearInvalidationHandlers,
} from './invalidation/part-invalidation-registry';
