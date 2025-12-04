# NCCI Digital Archive Setup Guide

## Overview
A complete digital archive system for NCCI (National Conference on Computer Innovations) has been created. The archive allows storing and displaying past conference information including papers, photos, schedules, documents, and more.

## Features Implemented

### Database Schema
Four new tables have been added to store archive data:

1. **archive_years** - Stores information about each conference year
   - Year, title, description, event date, location, theme, cover image
   
2. **archive_categories** - Defines content categories
   - Predefined categories: Overview, Schedules, Photos, Papers, Abstract Book, Speakers, Results, Documents
   
3. **archive_content** - Stores content items for each category
   - Title, description, file URL, thumbnails, metadata
   
4. **archive_papers** - Stores archived papers
   - Title, authors, abstract, keywords, file URL, track type, acceptance status

### Public Routes
- `/archive` - Landing page listing all archived years
- `/archive/2025` - Specific year archive with all content

### Admin Routes
- `/admin/archive` - Manage all archive years
- `/admin/archive/create` - Create new archive year
- `/admin/archive/[year]` - Manage specific year content (Dashboard)
- `/admin/archive/[year]/papers/add` - Add paper manually
- `/admin/archive/[year]/papers/import` - Import papers from submissions

### API Endpoints
- `POST /api/admin/archive/years` - Create archive year
- `GET /api/admin/archive/years/[year]` - Get specific year data
- `GET/POST /api/admin/archive/categories` - Manage categories
- `POST /api/admin/archive/content` - Add content items
- `POST /api/admin/archive/papers` - Add archived papers
- `POST /api/admin/archive/init` - Initialize default categories

## Setup Instructions

### Step 1: Run Database Migration
```bash
npm run drizzle:migrate
```

### Step 2: Initialize Archive Categories
After migration, as an admin user, make a POST request to:
```
POST /api/admin/archive/init
```

This will create the default categories:
- Event Overview
- Schedules & Programs
- Photo Gallery
- Papers Repository
- Abstract Book
- Speakers & Participants
- Competition Results
- Documents

### Step 3: Create Archive Year for 2025
1. Log in as admin
2. Navigate to `/admin/archive`
3. Click "Add New Year"
4. Fill in the form:
   - Year: 2025
   - Title: NCCI 2025 - National Conference on Computer Innovations
   - Description: Brief event description
   - Event Date: August 24, 2025
   - Location: Kathmandu University, Dhulikhel, Nepal
   - Theme: Your event theme
   - Cover Image: URL to cover image

### Step 4: Add Content
Once the year is created, navigate to `/admin/archive/2025` to access the archive dashboard.

#### Using the Dashboard

The dashboard provides two main ways to add papers:

**Option 1: Import from Submissions**
1. Click "Import from Submissions"
2. Filter by status (All, Accepted, Submitted)
3. Select papers to import
4. Click "Import X Papers"
- Automatically fetches author names and co-authors
- Preserves all paper metadata

**Option 2: Add Paper Manually**
1. Click "Add Paper"
2. Fill in the form with paper details
3. Enter authors as comma-separated names
4. Provide paper file URL
5. Select acceptance status

Alternatively, you can add content through API calls:

#### Adding Papers
```javascript
POST /api/admin/archive/papers
{
  "yearId": "uuid-of-2025-year",
  "title": "Paper Title",
  "authors": "Author1, Author2, Author3",
  "abstract": "Paper abstract",
  "keywords": ["keyword1", "keyword2"],
  "fileUrl": "https://example.com/paper.pdf",
  "trackType": "Research",
  "isAccepted": true
}
```

#### Adding Other Content (Photos, Documents, Schedules)
```javascript
POST /api/admin/archive/content
{
  "yearId": "uuid-of-2025-year",
  "categoryId": "uuid-of-category",
  "title": "Content Title",
  "description": "Content description",
  "fileUrl": "https://example.com/file.pdf",
  "thumbnailUrl": "https://example.com/thumbnail.jpg",
  "displayOrder": 0
}
```

## Navigation
The archive has been added to:
- Main site header navigation (public access)
- Admin sidebar navigation (admin access)

## Content Categories

### 1. Event Overview
General statistics and highlights from the event

### 2. Schedules & Programs
Event timeline, programs, and session schedules

### 3. Photo Gallery
Event photos and memorable moments

### 4. Papers Repository
All accepted and presented papers with full details

### 5. Abstract Book
Complete abstract book document (usually a single PDF)

### 6. Speakers & Participants
Information about keynote speakers and notable participants

### 7. Competition Results
Competition winners and results

### 8. Documents
Additional documents and resources (reports, proceedings, etc.)

## Technical Details

### Database Migration
- Migration file: `src/migrations/0010_clean_mimic.sql`
- All tables use UUID primary keys
- Foreign key constraints ensure data integrity
- Cascade deletes for related content

### Authentication
All admin endpoints require:
- Valid session
- User role: "admin"

### Image Handling
Uses Next.js Image component for optimized loading

### Type Safety
Full TypeScript support with proper type inference from database schema

## Next Steps (Optional Enhancements)

1. Create a rich admin UI for content upload with file handling
2. Add bulk paper import from existing submissions
3. Implement image upload/storage integration
4. Add search and filter functionality
5. Create PDF viewer for abstract book
6. Add statistics dashboard
7. Implement content versioning
8. Add export functionality

## File Structure
```
src/
├── app/
│   ├── archive/
│   │   ├── page.tsx                    # Archive landing page
│   │   └── 2025/
│   │       └── page.tsx                # 2025 archive page
│   ├── admin/
│   │   └── archive/
│   │       ├── page.tsx                # Admin archive management
│   │       ├── create/
│   │       │   └── page.tsx            # Create archive year
│   │       └── [year]/
│   │           ├── page.tsx            # Year dashboard
│   │           └── papers/
│   │               ├── add/
│   │               │   └── page.tsx    # Add paper form
│   │               └── import/
│   │                   └── page.tsx    # Import from submissions
│   └── api/
│       └── admin/
│           └── archive/
│               ├── years/
│               │   ├── route.ts        # Create year
│               │   └── [year]/
│               │       └── route.ts    # Get year data
│               ├── categories/         # Category management
│               ├── content/            # Content management
│               ├── papers/             # Paper management
│               └── init/               # Initialize categories
└── db/
    └── schema.ts                       # Updated with archive tables
```

## Notes
- The archive pages are server-side rendered for SEO
- Build will fail until migration is run (tables don't exist yet)
- Images require proper CORS configuration if hosted externally
- Consider implementing pagination for large datasets
- File storage strategy needs to be decided (local/S3/CDN)
