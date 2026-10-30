export declare function detectMimeFromBlipType(blipType: number): string | null;
export declare function parseInlineOfficeArtShape(bytes: Uint8Array, startOffset?: number): {
    shapeId: number;
    blipIndex?: number;
    name?: string;
    description?: string;
} | null;
