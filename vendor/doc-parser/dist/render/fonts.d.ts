import type { CharState, FontInfo } from '../types.js';
export declare function msDocFontFallbacks(family: string, info?: FontInfo): readonly string[];
export declare function textFontRuns(text: string, style: CharState): Array<{
    text: string;
    fontFamily?: string;
}>;
