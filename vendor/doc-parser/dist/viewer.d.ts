import type { Config } from 'dompurify';
import type { MsDocParseToHtmlOptions, MsDocRenderResult, MsDocViewer, MsDocViewerConfig, ViewerInput } from './types.js';
export declare function sanitizeFileViewerDocumentMarkup(html: string, targetWindow: Window, config: Config): unknown | null;
export declare function sanitizeMsDocHtml(html: string, targetWindow: Window): DocumentFragment;
export declare function mountMsDoc(container: HTMLElement, rendered: MsDocRenderResult): HTMLElement;
export declare function parseMsDocToHtml(input: ViewerInput, options?: MsDocParseToHtmlOptions): Promise<MsDocRenderResult>;
export declare function createMsDocViewer(container: HTMLElement, config?: MsDocViewerConfig): MsDocViewer;
