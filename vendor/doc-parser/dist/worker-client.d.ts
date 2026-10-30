import type { MsDocParseOptions, MsDocParseResult, MsDocParseToHtmlOptions, MsDocRenderOptions, MsDocRenderResult, MsDocWorkerClientLike, WorkerLike } from './types.js';
export declare class MsDocWorkerClient implements MsDocWorkerClientLike {
    private readonly worker;
    private readonly pending;
    private seq;
    constructor(worker: WorkerLike);
    static create(url?: URL, workerOptions?: WorkerOptions): MsDocWorkerClient;
    private handleMessage;
    private handleError;
    private request;
    parse(input: ArrayBuffer | ArrayBufferView, options?: MsDocParseOptions): Promise<MsDocParseResult>;
    parseToHtml(input: ArrayBuffer | ArrayBufferView, options?: MsDocParseToHtmlOptions): Promise<MsDocRenderResult>;
    render(parsed: MsDocParseResult, options?: MsDocRenderOptions): Promise<MsDocRenderResult>;
    destroy(): void;
}
