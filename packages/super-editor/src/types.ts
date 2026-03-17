/**
 * Main types entrypoint for @pdfme/super-editor.
 *
 * Importing this file (or the package) automatically loads all type augmentations
 * for commands and node/mark attributes.
 *
 * @example
 * ```typescript
 * import { Editor } from '@pdfme/super-editor';
 * import { isNodeType, type NodeAttrs, type ParagraphAttrs } from '@pdfme/super-editor';
 *
 * const editor = new Editor({ ... });
 *
 * // Commands are fully typed
 * editor.commands.toggleBold();           // ✅ Autocomplete
 * editor.commands.setFontSize('14pt');    // ✅ Type-checked
 *
 * // Node attributes are typed
 * editor.state.doc.descendants((node) => {
 *   if (isNodeType(node, 'paragraph')) {
 *     // node.attrs is typed as ParagraphAttrs
 *     const styleId = node.attrs.paragraphProperties?.styleId;
 *   }
 * });
 *
 * // Direct type usage
 * function processParagraph(attrs: NodeAttrs<'paragraph'>) {
 *   // attrs is ParagraphAttrs
 * }
 * ```
 *
 * @module Types
 */

// Load all augmentations (side-effect imports)
import './extensions/types/index';

// ============================================
// COMMAND TYPES
// ============================================

export type {
  EditorCommands,
  CommandProps,
  Command,
  ChainedCommand,
  ChainableCommandObject,
  CanCommand,
  CanObject,
  CoreCommands,
  ExtensionCommands,
  CoreCommandMap,
  ExtensionCommandMap,
} from './core/types/ChainedCommands';

// ============================================
// NODE ATTRIBUTE TYPES
// ============================================

export type { NodeAttributesMap, NodeName, NodeAttrs, TypedNode } from './core/types/NodeAttributesMap';

export { isNodeType, assertNodeType } from './core/types/NodeAttributesMap';

// ============================================
// MARK ATTRIBUTE TYPES
// ============================================

export type { MarkAttributesMap, MarkName, MarkAttrs, TypedMark } from './core/types/MarkAttributesMap';

export { isMarkType } from './core/types/MarkAttributesMap';

// ============================================
// NODE CATEGORY INTERFACES
// ============================================

export type {
  BlockNodeAttributes,
  OxmlNodeAttributes,
  TableNodeAttributes,
  TextContainerAttributes,
  InlineNodeAttributes,
  ShapeNodeAttributes,
} from './core/types/NodeCategories';

// ============================================
// COMMONLY USED ATTRIBUTE TYPES
// ============================================

// Paragraph types
export type {
  ParagraphAttrs,
  ParagraphProperties,
  NumberingProperties,
  IndentationProperties,
  SpacingProperties,
  ListRendering,
  SectionMargins,
} from './extensions/types/node-attributes';

// Table types
export type {
  TableAttrs,
  TableRowAttrs,
  TableCellAttrs,
  TableHeaderAttrs,
  TableProperties,
  TableRowProperties,
  TableCellProperties,
  TableMeasurement,
  TableBorders,
  TableLook,
  TableGrid,
  CellMargins,
  BorderSpec,
  ShadingProperties,
  ThemeColor,
} from './extensions/types/node-attributes';

// Image types
export type {
  ImageAttrs,
  ImageSize,
  ImagePadding,
  ImageWrap,
  ImageTransformData,
} from './extensions/types/node-attributes';

// Run types
export type { RunAttrs, RunProperties } from './extensions/types/node-attributes';

// Other node types
export type {
  DocumentAttrs,
  TextAttrs,
  LineBreakAttrs,
  HardBreakAttrs,
  StructuredContentAttrs,
  DocumentSectionAttrs,
} from './extensions/types/node-attributes';

// Tab and bookmark types
export type { TabAttrs, BookmarkStartAttrs, BookmarkEndAttrs } from './extensions/types/node-attributes';

// Shape types
export type {
  ShapeContainerAttrs,
  ShapeGroupAttrs,
  ShapeGroupSize,
  ShapeGroupPadding,
  ShapeGroupMarginOffset,
  ShapeTextboxAttrs,
  VectorShapeAttrs,
  VectorShapeTextInsets,
} from './extensions/types/node-attributes';

// Mention and page types
export type {
  MentionAttrs,
  PageReferenceAttrs,
  PageNumberAttrs,
  TotalPageCountAttrs,
} from './extensions/types/node-attributes';

// Field annotation types
export type { FieldAnnotationAttrs, FieldAnnotationSize } from './extensions/types/node-attributes';

// Content block types
export type {
  ContentBlockAttrs,
  ContentBlockSize,
  ContentBlockMarginOffset,
  TableOfContentsAttrs,
  StructuredContentBlockAttrs,
  DocumentPartObjectAttrs,
} from './extensions/types/node-attributes';

// Passthrough types
export type { PassthroughBlockAttrs, PassthroughInlineAttrs } from './extensions/types/node-attributes';

// Permission types
export type { PermStartAttrs, PermEndAttrs } from './extensions/types/node-attributes';

// Comment range types
export type {
  CommentRangeStartAttrs,
  CommentRangeEndAttrs,
  CommentReferenceAttrs,
} from './extensions/types/node-attributes';

// Mark types
export type {
  BoldAttrs,
  ItalicAttrs,
  UnderlineAttrs,
  UnderlineStyle,
  StrikeAttrs,
  LinkAttrs,
  TargetFrameOption,
  HighlightAttrs,
  HighlightColor,
  TextStyleAttrs,
  TrackInsertAttrs,
  TrackDeleteAttrs,
  TrackFormatEntry,
  TrackFormatAttrs,
  CommentMarkAttrs,
} from './extensions/types/mark-attributes';

// ============================================
// EXTENSION HELPERS
// ============================================

export { defineNode } from './core/defineNode';
export { defineMark } from './core/defineMark';

export type { NodeConfig } from './core/Node';
export type { MarkConfig } from './core/Mark';
export type { OxmlNodeConfig } from './core/OxmlNode';

// ============================================
// EDITOR TYPES
// ============================================

export type { ProseMirrorJSON, ProseMirrorJSONNode, ProseMirrorJSONMark } from './core/types/EditorTypes';
