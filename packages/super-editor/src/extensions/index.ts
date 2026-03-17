// Extensions
import { History } from './history/index';
import { Color } from './color/index';
import { FontFamily } from './font-family/index';
import { FontSize } from './font-size/index';
import { LetterSpacing } from './letter-spacing/index';
import { TextAlign } from './text-align/index';
import { FormatCommands } from './format-commands/index';
import { DropCursor } from './dropcursor/index';
import { Gapcursor } from './gapcursor/index';
import { Collaboration } from './collaboration/index';
import { CollaborationCursor } from './collaboration-cursor/index';
import { AiPlugin, AiMark, AiAnimationMark, AiLoaderNode } from './ai/index';
import { ContextMenu } from './context-menu';
import {
  StructuredContentCommands,
  StructuredContent,
  StructuredContentBlock,
  DocumentSection,
  DocumentPartObject,
} from './structured-content/index';

// Nodes extensions
import { Document } from './document/index';
import { Text } from './text/index';
import { Run } from './run/index';
import { Paragraph } from './paragraph/index';
import { Heading } from './heading/index';
import { CommentRangeStart, CommentRangeEnd, CommentReference, CommentsMark } from './comment/index';
import { FootnoteReference } from './footnote/index';
import { EndnoteReference } from './endnote/index';
import { TabNode } from './tab/index';
import { LineBreak, HardBreak } from './line-break/index';
import { Table } from './table/index';
import { TableHeader } from './table-header/index';
import { TableRow } from './table-row/index';
import { TableCell } from './table-cell/index';
import { FieldAnnotation, fieldAnnotationHelpers } from './field-annotation/index';
import { Image } from './image/index';
import { BookmarkStart, BookmarkEnd } from './bookmarks/index';
import { Mention } from './mention/index';
import { PageNumber, TotalPageCount } from './page-number/index';
import { PageReference } from './page-reference/index';
import { ShapeContainer } from './shape-container/index';
import { ShapeTextbox } from './shape-textbox/index';
import { ContentBlock } from './content-block/index';
import { BlockNode } from './block-node/index';
import { TableOfContents, TocPageNumber } from './table-of-contents/index';
import { DocumentIndex } from './document-index/index';
import { VectorShape } from './vector-shape/index';
import { ShapeGroup } from './shape-group/index';
import { Chart } from './chart/index';
import { PassthroughBlock, PassthroughInline } from '@extensions/passthrough/index';
import { IndexEntry } from './index-entry/index';
import { TableOfContentsEntry } from './table-of-contents-entry/index';
import { CrossReference } from './cross-reference/index';
import { SequenceField } from './sequence-field/index';
import { Citation } from './citation/index';
import { Bibliography } from './bibliography/index';
import { AuthorityEntry } from './authority-entry/index';
import { TableOfAuthorities } from './table-of-authorities/index';

// Marks extensions
import { TextStyle } from './text-style/text-style';
import { Bold } from './bold/index';
import { Italic } from './italic/index';
import { Underline } from './underline/index';
import { Highlight } from './highlight/index';
import { Strike } from './strike/index';
import { Link } from './link/index';
import { TrackInsert, TrackDelete, TrackFormat, TrackChanges } from './track-changes/index';
import { TextTransform } from './text-transform/index';

// Plugins
import { CommentsPlugin } from './comment/index';
import { Placeholder } from './placeholder/index';
import { PopoverPlugin } from './popover-plugin/index';
import { LinkedStyles } from './linked-styles/linked-styles';
import { Search } from './search/index';
import { NodeResizer } from './noderesizer/index';
import { CustomSelection } from './custom-selection/index';
import { PermissionRanges } from './permission-ranges/index';
import { VerticalNavigation } from './vertical-navigation/index';

// Permissions
import { PermStart, PermStartBlock } from './perm-start/index';
import { PermEnd, PermEndBlock } from './perm-end/index';

// Helpers
import { trackChangesHelpers } from './track-changes/index';
import { EditorExtension } from '@core/types/EditorConfig';

const getRichTextExtensions = () => {
  return [
    Bold,
    Color,
    Document,
    FontFamily,
    FontSize,
    LetterSpacing,
    History,
    Heading,
    Italic,
    Link,
    Paragraph,
    TableOfContents,
    DocumentIndex,
    Strike,
    Text,
    TextAlign,
    TextStyle,
    Underline,
    Placeholder,
    PopoverPlugin,
    Mention,
    Highlight,
    FormatCommands,
    Table,
    TableRow,
    TableCell,
    TableHeader,
    FieldAnnotation,
    DropCursor,
    TrackInsert,
    TrackDelete,
    TrackFormat,
    AiPlugin,
    Image,
    NodeResizer,
    CustomSelection,
    PassthroughInline,
    PassthroughBlock,
  ];
};

const getStarterExtensions = (): EditorExtension[] => {
  return [
    Bold,
    BlockNode,
    Color,
    CommentRangeStart,
    CommentRangeEnd,
    CommentReference,
    FootnoteReference,
    EndnoteReference,
    Document,
    FontFamily,
    FontSize,
    LetterSpacing,
    History,
    Heading,
    Italic,
    Link,
    Paragraph,
    LineBreak,
    HardBreak,
    Run,
    ContextMenu,
    Strike,
    TabNode,
    TableOfContents,
    TocPageNumber,
    DocumentIndex,
    Text,
    TextAlign,
    TextStyle,
    Underline,
    FormatCommands,
    CommentsPlugin,
    Gapcursor,
    Table,
    TableRow,
    TableCell,
    TableHeader,
    FieldAnnotation,
    DropCursor,
    Image,
    BookmarkStart,
    BookmarkEnd,
    Mention,
    Collaboration,
    CollaborationCursor,
    TrackChanges,
    TrackInsert,
    TrackDelete,
    TrackFormat,
    CommentsMark,
    Highlight,
    LinkedStyles,
    AiPlugin,
    AiMark,
    AiAnimationMark,
    AiLoaderNode,
    PageNumber,
    TotalPageCount,
    PageReference,
    IndexEntry,
    TableOfContentsEntry,
    CrossReference,
    SequenceField,
    Citation,
    Bibliography,
    AuthorityEntry,
    TableOfAuthorities,
    ShapeContainer,
    ShapeTextbox,
    ContentBlock,
    Search,
    StructuredContent,
    StructuredContentBlock,
    StructuredContentCommands,
    DocumentSection,
    DocumentPartObject,
    NodeResizer,
    CustomSelection,
    TextTransform,
    VectorShape,
    ShapeGroup,
    Chart,
    PermStart,
    PermEnd,
    PermStartBlock,
    PermEndBlock,
    PermissionRanges,
    VerticalNavigation,
    PassthroughInline,
    PassthroughBlock,
  ];
};

export {
  History,
  Heading,
  Document,
  Text,
  Run,
  Paragraph,
  CommentRangeStart,
  CommentRangeEnd,
  CommentReference,
  FootnoteReference,
  EndnoteReference,
  TabNode,
  LineBreak,
  HardBreak,
  Bold,
  Italic,
  Underline,
  Highlight,
  Strike,
  Color,
  FontFamily,
  FontSize,
  LetterSpacing,
  TextAlign,
  TextStyle,
  FormatCommands,
  CommentsPlugin,
  Gapcursor,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  DocumentIndex,
  IndexEntry,
  TableOfContentsEntry,
  TocPageNumber,
  Placeholder,
  DropCursor,
  BlockNode,
  FieldAnnotation,
  fieldAnnotationHelpers,
  Image,
  BookmarkStart,
  BookmarkEnd,
  PopoverPlugin,
  Mention,
  Collaboration,
  CollaborationCursor,
  TrackChanges,
  TrackInsert,
  TrackDelete,
  TrackFormat,
  CommentsMark,
  trackChangesHelpers,
  getStarterExtensions,
  getRichTextExtensions,
  AiMark,
  AiAnimationMark,
  AiLoaderNode,
  AiPlugin,
  Search,
  StructuredContent,
  StructuredContentBlock,
  StructuredContentCommands,
  DocumentSection,
  NodeResizer,
  CustomSelection,
  TextTransform,
  VectorShape,
  ShapeGroup,
  Chart,
  PassthroughInline,
  PassthroughBlock,
  PermissionRanges,
  CrossReference,
  SequenceField,
  Citation,
  Bibliography,
  AuthorityEntry,
  TableOfAuthorities,
};
