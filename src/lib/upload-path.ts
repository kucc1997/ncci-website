const DEFAULT_UPLOAD_DIR = "public/uploads";

export function getUploadDir() {
  return process.env.UPLOAD_DIR?.trim() || DEFAULT_UPLOAD_DIR;
}

export function getUploadPublicBasePath() {
  const normalized = getUploadDir()
    .replace(/\\/g, "/")
    .replace(/^\.?\//, "")
    .replace(/\/+$/, "");

  if (!normalized.startsWith("public/")) {
    return "/uploads";
  }

  return `/${normalized.slice("public/".length)}`;
}
