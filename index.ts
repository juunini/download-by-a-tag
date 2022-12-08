interface Props {
  fileName: string
  arrayBuffer?: ArrayBuffer
  blob?: Blob
  mimeType?: string
}

export default function ({ fileName, arrayBuffer, blob, mimeType = 'application/octet-stream' }: Props): void {
  if (blob != null) {
    download(fileName, blob)
    return
  }

  if (arrayBuffer != null) {
    const blob = new Blob([arrayBuffer], { type: mimeType })
    download(fileName, blob)
    return
  }

  throw new Error('Either arrayBuffer or blob must be provided')
}

function download (fileName: string, blob: Blob): void {
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()
}
