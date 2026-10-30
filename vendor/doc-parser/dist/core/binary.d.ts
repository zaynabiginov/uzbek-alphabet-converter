import type { BinaryInput } from '../types.js';
type ReaderMethod = ((offset: number) => number) & {
    byteWidth?: number;
};
export declare class BinaryReader {
    readonly bytes: Uint8Array;
    readonly view: DataView;
    readonly length: number;
    constructor(input: BinaryInput);
    ensure(offset: number, size?: number): boolean;
    u8(offset: number): number;
    i8(offset: number): number;
    u16(offset: number): number;
    i16(offset: number): number;
    u32(offset: number): number;
    i32(offset: number): number;
    u64(offset: number): number;
    slice(offset: number, length: number): Uint8Array;
    array(offset: number, count: number, readFn: ReaderMethod): number[];
    utf16le(offset: number, byteLength: number): string;
    latin1(offset: number, byteLength: number): string;
    ascii(offset: number, byteLength: number): string;
    utf16z(offset: number, byteLength: number): string;
}
export declare function toUint8Array(input: BinaryInput): Uint8Array;
export {};
