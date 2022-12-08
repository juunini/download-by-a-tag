"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a) {
    var fileName = _a.fileName, arrayBuffer = _a.arrayBuffer, blob = _a.blob, _b = _a.mimeType, mimeType = _b === void 0 ? 'application/octet-stream' : _b;
    if (blob != null) {
        download(fileName, blob);
        return;
    }
    if (arrayBuffer != null) {
        var blob_1 = new Blob([arrayBuffer], { type: mimeType });
        download(fileName, blob_1);
        return;
    }
    throw new Error('Either arrayBuffer or blob must be provided');
}
exports.default = default_1;
function download(fileName, blob) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
}
