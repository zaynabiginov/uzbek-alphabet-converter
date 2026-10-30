import type { MsDocParseOptions, MsDocParseResult, ParagraphModel, TableRowBlock } from '../types.js';
export declare function finalizeTableGrid(rows: TableRowBlock[]): void;
export declare function normalizeRowEndOnlyTables(paragraphs: ParagraphModel[]): void;
export declare function buildBlocks(paragraphs: ParagraphModel[]): MsDocParseResult['blocks'];
export declare function parseMsDoc(input: ArrayBuffer | Uint8Array | ArrayBufferView, options?: MsDocParseOptions): MsDocParseResult;
