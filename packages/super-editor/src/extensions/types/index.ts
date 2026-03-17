/**
 * Types-only entrypoint that imports all command and attribute augmentations.
 * This file ensures all module augmentations are loaded when the package types are used.
 *
 * @module ExtensionTypes
 */

// Command augmentations (existing)
import './formatting-commands';
import './specialized-commands';
import './history-link-table-commands';

// Command augmentations (new)
import './paragraph-commands';
import './block-node-commands';
import './image-commands';
import './comment-commands';
import './track-changes-commands';
import './miscellaneous-commands';

// Attribute augmentations
import './node-attributes';
import './mark-attributes';

// Re-export common types for convenience
export type {
  EditorCommands,
  CommandProps,
  Command,
  ChainedCommand,
  ChainableCommandObject,
} from '../../core/types/ChainedCommands';

export type { NodeAttributesMap, NodeName, NodeAttrs, TypedNode } from '../../core/types/NodeAttributesMap';

export type { MarkAttributesMap, MarkName, MarkAttrs } from '../../core/types/MarkAttributesMap';
