import { mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { auth } from "@/auth";
import { getUploadDir, getUploadPublicBasePath } from "@/lib/upload-path";
import {
  detectMimeType,
  getExtensionForMimeType,
  sanitizeFileStem,
} from "@/lib/file-upload-validation";

const UPLOAD_DIR = getUploadDir();
const UPLOAD_PUBLIC_BASE = getUploadPublicBasePath();

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const detectedMimeType = detectMimeType(buffer);
    const fileExtension = detectedMimeType
      ? getExtensionForMimeType(detectedMimeType)
      : null;
    const allowedMimeTypes = new Set([
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ]);

    if (!detectedMimeType || !allowedMimeTypes.has(detectedMimeType) || !fileExtension) {
      return NextResponse.json(
        { error: "Invalid file type. Only PDF and supported image files are allowed." },
        { status: 400 }
      );
    }

    const stem = sanitizeFileStem(file.name);
    const filename = `${Date.now()}-${stem}.${fileExtension}`;
    const uploadDir = path.join(process.cwd(), UPLOAD_DIR, "archive");
    const filepath = path.join(uploadDir, filename);

    await mkdir(uploadDir, { recursive: true });
    await writeFile(filepath, buffer);

    return NextResponse.json({ url: `${UPLOAD_PUBLIC_BASE}/archive/${filename}` });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
