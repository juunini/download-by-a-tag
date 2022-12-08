interface Props {
    fileName: string;
    arrayBuffer?: ArrayBuffer;
    blob?: Blob;
    mimeType?: string;
}
export default function ({ fileName, arrayBuffer, blob, mimeType }: Props): void;
export {};
