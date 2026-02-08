const MIME_EXTENSION_MAP: Record<string, string> = {
  "application/pdf": "pdf",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
};

function hasPrefix(buffer: Buffer, bytes: number[]) {
  return bytes.every((byte, index) => buffer[index] === byte);
}

export function detectMimeType(buffer: Buffer): string | null {
  if (buffer.length >= 4 && hasPrefix(buffer, [0x25, 0x50, 0x44, 0x46])) {
    return "application/pdf";
  }

  if (
    buffer.length >= 8 &&
    hasPrefix(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  ) {
    return "image/png";
  }

  if (buffer.length >= 3 && hasPrefix(buffer, [0xff, 0xd8, 0xff])) {
    return "image/jpeg";
  }

  if (buffer.length >= 4 && hasPrefix(buffer, [0x47, 0x49, 0x46, 0x38])) {
    return "image/gif";
  }

  if (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return "image/webp";
  }

  return null;
}

export function getExtensionForMimeType(mimeType: string) {
  return MIME_EXTENSION_MAP[mimeType] || null;
}

export function sanitizeFileStem(fileName: string) {
  return fileName
    .replace(/[\\/]/g, "-")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "file";
}
