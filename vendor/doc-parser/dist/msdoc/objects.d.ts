import type { ImageAsset, MsDocParseOptions, ObjectPoolInfo, ParsedCFB } from '../types.js';
export interface OfficeArtRecordHeader {
    recVer: number;
    recInstance: number;
    recType: number;
    recLen: number;
    size: number;
}
export declare function trimTrailingNullCharacters(value: string): string;
export declare function detectImageSegment(bytes: Uint8Array): {
    mime: string;
    start: number;
    end: number;
} | null;
export declare function parseOfficeArtRecordHeader(bytes: Uint8Array, offset: number): OfficeArtRecordHeader | null;
export declare function extractPictureAsset(dataStreamBytes: Uint8Array, pictureOffset: number | null | undefined, options?: MsDocParseOptions): ImageAsset | null;
export declare function extractFbseImageAsset(drawingBytes: Uint8Array, offset: number, header?: OfficeArtRecordHeader | null): ImageAsset | null;
export declare function parseOle10Native(streamBytes: Uint8Array): {
    label: string;
    originalPath: string;
    tempPath: string;
    dataSize: number;
    bytes: Uint8Array;
} | null;
export declare function extractObjectPool(cfb: ParsedCFB): Map<string, ObjectPoolInfo>;
