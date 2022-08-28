# Download by a tag

## Install

```sh
# npm
$ npm install download-by-a-tag

# yarn
$ yarn add download-by-a-tag

# pnpm
$ pnpm add download-by-a-tag
```

## Usage

```ts
import download from 'download-by-a-tag';

// If you have ArrayBuffer
download({
  fileName: 'your-file-name.txt',
  arrayBuffer: yourArrayBuffer,
  mimeType: 'application/octet-stream', // optional
});

// If you have Blob
download({
  fileName: 'your-file-name.txt',
  blob: yourBlob,
});
```
