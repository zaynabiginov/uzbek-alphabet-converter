import type { MsDocParseResult, MsDocRenderOptions, MsDocRenderResult } from '../types.js';
type ExternalLinkPolicy = NonNullable<MsDocRenderOptions['externalLinkPolicy']>;
export declare function sanitizeMsDocLinkHref(href: string | undefined | null, policy?: ExternalLinkPolicy): string | null;
export declare function defaultMsDocCss(): string;
export declare function renderMsDoc(parsed: MsDocParseResult, options?: MsDocRenderOptions): MsDocRenderResult;
export {};
