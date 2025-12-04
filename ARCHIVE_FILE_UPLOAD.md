# Archive File Upload Implementation Guide

## Current Status

### ✅ Completed Features

1. **Category Management**
   - `/admin/archive/categories` - View all categories
   - `/admin/archive/categories/add` - Create new categories
   - Initialize default categories with one click
   - Categories accessible from admin sidebar

2. **Year Management**
   - Create archive years
   - Edit archive years (title, description, date, location, theme, cover image)
   - View all years

3. **Paper Management**
   - Add papers manually
   - Import papers from submissions (with authors)
   - Edit papers
   - Delete papers

4. **Content Management**
   - Add content items (photos, documents, schedules, etc.)
   - Organize by category
   - Set display order

5. **Public Archive**
   - Browse archives by year
   - View papers and content
   - Responsive design

## 🚧 File Upload Implementation Needed

Currently, all file inputs require **URLs** (file must already be hosted somewhere). To add file upload support:

### Option 1: Local File Storage (Simple, Free)

**Steps:**
1. Create `public/uploads/archive/` directory structure
2. Add file upload API endpoint
3. Update forms to handle file uploads
4. Store files in public directory
5. Save relative URLs to database

**Pros:**
- Simple to implement
- No external dependencies
- Free

**Cons:**
- Files stored on server
- Not scalable for large files
- Lost if server redeployed

### Option 2: Cloud Storage (AWS S3, Recommended)

**Steps:**
1. Set up AWS S3 bucket
2. Install AWS SDK: `npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner`
3. Add environment variables for AWS credentials
4. Create upload API endpoint with S3 integration
5. Update forms with file upload
6. Generate signed URLs for access

**Pros:**
- Scalable
- Reliable
- CDN support
- Professional

**Cons:**
- Requires AWS account
- Has costs (minimal for small usage)
- More complex setup

### Option 3: Other Cloud Providers

- **Cloudinary**: Great for images, has free tier
- **UploadThing**: Easy to use, built for Next.js
- **Supabase Storage**: Good if already using Supabase
- **Vercel Blob**: Native Vercel integration

## Implementation Plan (S3 Example)

### 1. Install Dependencies
```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
npm install multer # for file handling
```

### 2. Environment Variables
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=ncci-archive
```

### 3. Create Upload API
```typescript
// src/app/api/upload/route.ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;

  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: `archive/${fileName}`,
    Body: buffer,
    ContentType: file.type,
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    const fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/archive/${fileName}`;
    
    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
```

### 4. Update Forms to Support File Upload

Example for paper add form:
```typescript
const [uploading, setUploading] = useState(false);

const handleFileUpload = async (file: File) => {
  setUploading(true);
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    return data.url;
  } catch {
    toast.error('File upload failed');
    return null;
  } finally {
    setUploading(false);
  }
};

// In the form:
<input
  type="file"
  onChange={async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await handleFileUpload(file);
      if (url) {
        // Set the fileUrl field
        setFileUrl(url);
      }
    }
  }}
/>
```

### 5. Files to Update

Add file upload support to:
- `/admin/archive/create` - Cover image upload
- `/admin/archive/[year]/edit` - Cover image upload
- `/admin/archive/[year]/papers/add` - Paper PDF upload
- `/admin/archive/[year]/papers/[id]/edit` - Paper PDF upload
- `/admin/archive/[year]/content/add` - Content file & thumbnail upload

## Quick Start (Local Storage Option)

For a quick implementation using local storage:

1. **Create upload directory**
```bash
mkdir -p public/uploads/archive
```

2. **Add to `.gitignore`**
```
public/uploads/
```

3. **Create simple upload API**
```typescript
// src/app/api/upload/route.ts
import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
  const filepath = path.join(process.cwd(), 'public/uploads/archive', filename);
  
  await writeFile(filepath, buffer);
  
  return NextResponse.json({ url: `/uploads/archive/${filename}` });
}
```

4. **Update forms** (same as above but URLs will be `/uploads/archive/...`)

## Security Considerations

1. **File Validation**
   - Check file type (PDF, images only)
   - Limit file size (e.g., 10MB max)
   - Scan for malware if possible

2. **Access Control**
   - Require admin authentication for uploads
   - Use signed URLs for private content

3. **File Naming**
   - Sanitize filenames
   - Add timestamps to avoid collisions
   - Remove spaces and special characters

## Next Steps

1. Decide on storage solution (S3 recommended for production)
2. Set up storage credentials
3. Implement upload API
4. Update all forms with file upload UI
5. Test with various file types
6. Add progress indicators
7. Handle upload errors gracefully

## Cost Estimates (AWS S3)

- Storage: $0.023/GB per month
- Requests: $0.005 per 1,000 PUT requests
- Data transfer: $0.09/GB (out to internet)

**Example:** 100 papers (10MB each) + 500 photos (2MB each)
- Storage: ~2GB = $0.05/month
- Very affordable for conference archive!
