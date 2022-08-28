# Get file(Download) using a tag

## Install

```sh
# npm
$ npm install get-file-using-a-tag

# yarn
$ yarn add get-file-using-a-tag

# pnpm
$ pnpm add get-file-using-a-tag
```

## Usage

```ts
import download from 'get-file-using-a-tag';

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
