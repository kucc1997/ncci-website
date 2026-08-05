# NCCI Website

The NCCI website is a Next.js application for conference information, participant registration, paper submission and review, and the public digital archive.

This document is the canonical setup and operations guide. It covers the current implementation in this repository; proposed cloud-storage work and other future enhancements are identified as such.

## Contents

- [What the application provides](#what-the-application-provides)
- [Requirements](#requirements)
- [Local setup](#local-setup)
- [Environment configuration](#environment-configuration)
- [Configure GitHub and Google sign-in](#configure-github-and-google-sign-in)
- [Database and migrations](#database-and-migrations)
- [Run and build the application](#run-and-build-the-application)
- [Authentication and roles](#authentication-and-roles)
- [Conference operations](#conference-operations)
- [Digital archive operations](#digital-archive-operations)
- [Uploads and file storage](#uploads-and-file-storage)
- [Routes and APIs](#routes-and-apis)
- [Project structure](#project-structure)
- [Deployment considerations](#deployment-considerations)
- [Troubleshooting](#troubleshooting)

## What the application provides

### Public functionality

- Conference landing pages, about, committee, speakers, schedule, timeline, and contact pages.
- Participant registration with payment-voucher upload and registration-status lookup.
- Paper submission and paper-status pages.
- Public paper pages and, where available, review information.
- Public archive browsing by conference year.

### Authenticated functionality

- GitHub and Google sign-in through NextAuth.
- Admin dashboard for users, papers, registrations, reviewers, and archives.
- Reviewer dashboard for assigned papers and review submission.
- Archive management for years, categories, content, and papers.

## Requirements

- Node.js compatible with the installed Next.js 15 toolchain.
- npm or Bun. The repository includes `bun.lockb`; use Bun when possible, or npm if that is the team standard.
- A PostgreSQL database reachable from the development or deployment environment.
- OAuth applications for any sign-in providers you enable.
- An SMTP account if registration and contact emails should be delivered.

## Local setup

Clone the repository and enter the project directory:

```bash
git clone <repository-url>
cd ncci-website
```

Install dependencies. Use one package manager consistently for a given checkout:

```bash
# Bun
bun install

# Or npm
npm install
```

Create the local environment file:

```bash
cp .env.sample .env.local
```

Edit `.env.local` with real local values. Do not commit `.env.local`; it is ignored by Git.

Make sure the PostgreSQL database exists, then apply all committed migrations:

```bash
npm run drizzle:migrate
# Or: bun run drizzle:migrate
```

Start the development server:

```bash
npm run dev
# Or: bun run dev
```

Open `http://localhost:3000`.

## Environment configuration

The application reads `.env.local` through Next.js and the Drizzle configuration. The following values are used by the current source code.

| Variable | Required for | Description |
| --- | --- | --- |
| `AUTH_DRIZZLE_URL` | Database features | PostgreSQL connection string used by Drizzle and the application. |
| `NEXTAUTH_SECRET` | Authentication | Secret used by NextAuth and the admin middleware. Use a long random value. |
| `NEXTAUTH_URL` | Deployed authentication | Canonical application URL, for example `https://ncci.example.edu`. |
| `AUTH_TRUST_HOST` | Deployed authentication | Set to `true` when required by the hosting environment. The application also enables `trustHost` in `src/auth.ts`. |
| `GITHUB_ID` / `AUTH_GITHUB_ID` | GitHub sign-in | GitHub OAuth client ID. NextAuth v5 convention is `AUTH_GITHUB_ID`; verify the deployed provider configuration if using the legacy sample name. |
| `AUTH_GITHUB_SECRET` | GitHub sign-in | GitHub OAuth client secret. |
| `GOOGLE_CLIENT_ID` | Google sign-in | Google OAuth client ID. |
| `GOOGLE_CLIENT_SECRET` | Google sign-in | Google OAuth client secret. |
| `NEXT_PUBLIC_BASE_URL` | Registration email links | Public URL inserted into registration emails. |
| `UPLOAD_DIR` | File uploads | Filesystem directory for uploads. Defaults to `public/uploads`. |
| `SMTP_HOST` | Email | SMTP hostname, such as `smtp.gmail.com`. |
| `SMTP_PORT` | Email | SMTP port, commonly `587`. |
| `SMTP_SECURE` | Email | `true` for direct TLS; `false` for STARTTLS-style SMTP on port 587. |
| `EMAIL_USER` | Email | SMTP username and sender address. |
| `EMAIL_PASS` | Email | SMTP password or provider app password. |
| `EMAIL_RECIPIENT` | Contact form | Destination address for contact-form messages. |

For Gmail, use an app password rather than a normal account password when the account has two-factor authentication enabled. Configure OAuth callback URLs at the providers using the deployed host and the NextAuth callback path, typically `/api/auth/callback/github` or `/api/auth/callback/google`.

`AUTH_SECRET`, `EMAIL_USER_2`, and `EMAIL_PASS_2` appear in the sample file but are not read by the current application code. Do not rely on them unless the implementation is changed accordingly. Keep secrets out of source control and logs.

## Configure GitHub and Google sign-in

The sign-in page offers GitHub and Google buttons. Configure each provider independently; users can use either one. OAuth credentials are provider secrets and must only be stored in `.env.local` or the deployment platform’s secret manager.

The callback URL is derived from the public application URL:

```text
Local GitHub:  http://localhost:3000/api/auth/callback/github
Local Google:  http://localhost:3000/api/auth/callback/google

Production GitHub: https://<your-domain>/api/auth/callback/github
Production Google: https://<your-domain>/api/auth/callback/google
```

Replace `<your-domain>` with the exact value used for `NEXTAUTH_URL`. Do not mix `http` and `https`, add a trailing slash, or use a different hostname such as a deployment preview URL unless that URL is registered with the provider.

### GitHub OAuth App

1. Sign in to GitHub and open **Settings → Developer settings → OAuth Apps**.
2. Choose **New OAuth App**.
3. Set **Application name** to a recognizable value such as `NCCI Website (Local)`.
4. Set **Homepage URL** to `http://localhost:3000` for local development, or the production site URL for the production app.
5. Set **Authorization callback URL** to the matching callback URL above.
6. Create the app and copy its client ID and client secret into `.env.local`.

For the current NextAuth provider convention, use:

```env
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
```

The older `.env.sample` contains `GITHUB_ID`; treat that name as a legacy sample entry and prefer `AUTH_GITHUB_ID` for the provider configuration. If the deployed environment deliberately maps the legacy name, verify the provider’s resolved configuration before rollout.

GitHub OAuth Apps support one callback URL, so use separate OAuth Apps for local and production environments. See the official [GitHub OAuth App creation guide](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) for the provider-console steps and [GitHub OAuth security guidance](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/best-practices-for-creating-an-oauth-app) before sharing an app with other users.

### Google OAuth client

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project for the NCCI website.
3. Configure the OAuth consent screen under **Google Auth platform**. Add the application name, support email, authorized domain, and test users if the application is still in testing mode.
4. Open **Credentials**, choose **Create credentials → OAuth client ID**, and select **Web application**.
5. Add the local origin `http://localhost:3000` and the production origin under **Authorized JavaScript origins** when applicable.
6. Add the matching callback URL under **Authorized redirect URIs**:

   ```text
   http://localhost:3000/api/auth/callback/google
   https://<your-domain>/api/auth/callback/google
   ```

7. Create the client and copy its ID and secret into `.env.local`:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

Use separate credentials for local and production when possible. Google requires the redirect URI in the authorization request to exactly match one of the registered authorized redirect URIs. See Google’s official [OAuth 2.0 web-server guide](https://developers.google.com/identity/protocols/oauth2/web-server) for the console and redirect-URI model.

### Verify provider setup

After setting the variables:

1. Restart the development server; environment changes are not picked up by an already-running Next.js process.
2. Open the sign-in page and test GitHub and Google separately.
3. Confirm a successful sign-in creates a row in the `user` table.
4. Confirm the user’s email is present and promote the account to `admin` only when appropriate.
5. Repeat the test against the production hostname after deployment.

Common provider errors:

- `redirect_uri_mismatch`: the callback URL is absent, has the wrong protocol/hostname, or differs by a trailing slash.
- `invalid_client`: the client ID/secret pair is wrong or belongs to a different provider environment.
- Provider button returns to sign-in: inspect the server logs, confirm `NEXTAUTH_SECRET`, and verify that the provider variables are available to the server runtime rather than only to the browser.
- Google account is blocked during testing: add the account as a test user or publish the consent screen according to the project’s Google Cloud configuration.

## Database and migrations

The application uses Drizzle ORM with PostgreSQL. The schema source is `src/db/schema.ts`; generated SQL migrations are stored in `src/migrations`.

Available database commands:

```bash
# Generate a migration after intentionally changing src/db/schema.ts
npm run drizzle:generate

# Apply committed migrations to the database
npm run drizzle:migrate
```

Run migrations before starting a new environment. The archive tables are introduced by the latest committed migration, currently `src/migrations/0010_clean_mimic.sql`:

- `archive_years`
- `archive_categories`
- `archive_content`
- `archive_papers`

Migrations are applied in journal order. Do not manually edit an already-applied migration; change the schema and generate a new migration instead.

## Run and build the application

The scripts defined in `package.json` are:

```bash
npm run dev              # Next.js development server with Turbopack
npm run build            # Production build
npm run start            # Serve the production build
npm run lint             # Legacy Next lint script; verify compatibility with the installed Next.js version
npm run drizzle:generate # Generate Drizzle SQL migrations
npm run drizzle:migrate  # Apply Drizzle SQL migrations
```

For a production-like local check:

```bash
npm run build
npm run start
```

The production process still needs access to the same database, authentication, email, and upload configuration as the development process.

## Authentication and roles

Users sign in through GitHub or Google. On first sign-in, the application creates a row in the `user` table. The role defaults to `user`.

The current roles are:

- `user`: normal authenticated user; can submit papers and use participant-facing features.
- `reviewer`: can access assigned papers and submit reviews through the reviewer workflow.
- `admin`: can access the admin dashboard and protected archive-management and upload operations.

There is no documented seed command for creating an administrator. In a new environment, sign in once to create the user row, then promote that row to `admin` using the project’s existing administrative/database procedure. Treat direct database role changes as privileged operational actions and verify the user’s email before changing it.

The `/admin/*` middleware currently checks for a token, while individual API handlers enforce role checks where required. Always verify authorization behavior in the deployed environment before exposing administrative URLs.

## Conference operations

### Registration

Participants use `/registration`. The registration endpoint stores the registration record, writes the payment voucher under `<UPLOAD_DIR>/vouchers`, and attempts to send a confirmation email. The generated registration ID is used at `/registration/status/<id>`.

Administrators can review registrations at `/admin/registrations` and update their status. Email failure is logged and does not roll back an otherwise successful registration, so operators should monitor SMTP delivery separately.

### Paper submission

Authors submit papers through the public paper workflow. PDF uploads are stored under `<UPLOAD_DIR>/papers`, and paper metadata is stored in PostgreSQL. The first author must already be associated with a registered account whose email matches the submission.

### Reviewer workflow

1. Create or identify the user who will review papers.
2. Add a reviewer record and associate it with that user’s email.
3. Assign papers from the admin reviewer workflow.
4. The reviewer opens `/reviewer`, reviews assigned papers, and submits the review form.
5. The assignment is marked reviewed and the review JSON is stored in the `reviews` table.

## Digital archive operations

### Public archive

- `/archive` lists available conference years.
- `/archive/<year>` displays the selected year, its categories, content, and accepted archived papers.

### Initial archive setup

1. Apply migrations with `npm run drizzle:migrate`.
2. Sign in as an administrator.
3. Open `/admin/archive/categories` and use the initialization action to create the default categories.
4. Open `/admin/archive` and create a conference year with its title, description, event date, location, theme, and optional cover image.
5. Open the year dashboard at `/admin/archive/<year>`.
6. Add content such as schedules, photos, abstract books, speakers, results, and documents.
7. Add papers manually or import them from existing submissions.
8. Open the public archive route and verify links, images, metadata, and accepted-paper visibility.

The default categories are intended to cover event overview, schedules/programs, photo galleries, papers, abstract books, speakers/participants, competition results, and other documents. Categories can also be created individually.

### Archive content management

Archive administrators can:

- create and edit archive years;
- create, initialize, and order categories;
- add, edit, and order content items;
- add papers manually;
- import papers from submissions;
- edit or delete archived papers;
- attach already-uploaded file URLs to archive records.

The archive upload form accepts PDF and supported image files. The upload endpoint returns a public URL which is then saved in the relevant archive record.

## Uploads and file storage

The current implementation uses the local filesystem, not S3 or another cloud provider.

`UPLOAD_DIR` defaults to `public/uploads`. Relative public paths are derived only when the configured directory is inside `public`; otherwise the application falls back to `/uploads` for the returned URL. The current upload groups are:

| Data | Filesystem location | Public path |
| --- | --- | --- |
| Archive files and cover/content images | `<UPLOAD_DIR>/archive` | `/uploads/archive/...` by default |
| Submitted papers | `<UPLOAD_DIR>/papers` | `/uploads/papers/...` by default |
| Registration payment vouchers | `<UPLOAD_DIR>/vouchers` | `/uploads/vouchers/...` by default |

Archive uploads require an authenticated administrator, are limited to 10 MB, and validate file signatures rather than trusting only the browser MIME type. Supported archive types are PDF, JPEG, PNG, GIF, and WebP. Public paper submissions require a PDF, while registration vouchers accept PDF, PNG, and JPEG.

The upload directory is ignored by Git. Back it up separately and ensure the runtime user can create directories and write files. On serverless or ephemeral hosting, local uploads may disappear during redeploys or instance replacement; durable storage is therefore a production limitation. A future cloud object-storage implementation can preserve the database URL contract while moving file persistence out of the application filesystem.

## Routes and APIs

### Public routes

| Route | Purpose |
| --- | --- |
| `/` | Conference home page |
| `/about`, `/committee`, `/speakers`, `/schedule`, `/timeline` | Conference information |
| `/registration` | Submit registration or look up a registration ID |
| `/registration/success` | Registration confirmation |
| `/registration/status/<id>` | View registration status |
| `/papers` | Browse papers |
| `/papers/<submissionId>` | View a paper and available reviews |
| `/archive` | Browse archive years |
| `/archive/<year>` | Browse one conference archive |
| `/contact` | Contact form |

### Admin routes

| Route | Purpose |
| --- | --- |
| `/admin` | Admin dashboard |
| `/admin/users` | User administration |
| `/admin/papers` | Paper administration |
| `/admin/registrations` | Registration administration |
| `/admin/reviewers` | Reviewer and assignment administration |
| `/admin/archive` | Archive-year administration |
| `/admin/archive/categories` | Archive-category administration |
| `/admin/archive/<year>` | Manage one archive year |
| `/admin/archive/<year>/papers/add` | Add an archived paper |
| `/admin/archive/<year>/papers/import` | Import submitted papers |
| `/admin/archive/<year>/content/add` | Add archive content |

### Important API groups

| API group | Purpose |
| --- | --- |
| `/api/auth/*` | NextAuth provider and session endpoints |
| `/api/registration` and `/api/registration/<id>` | Create, read, and update registrations |
| `/api/papers/*` | Paper submission, lookup, CSV, and review APIs |
| `/api/reviewer/*` | Reviewer assignments and review submission |
| `/api/reviewers/*` | Reviewer management and forwarding |
| `/api/admin/archive/*` | Archive years, categories, content, papers, and initialization |
| `/api/upload` | Admin archive-file upload |
| `/api/contact` | Contact-form email handling |

All administrative operations should be performed through the UI where available. When calling an API directly, use an authenticated administrator session and inspect the response status before assuming the operation succeeded.

## Project structure

```text
src/
├── app/                 Next.js pages, layouts, and route handlers
│   ├── admin/           Authenticated administration pages
│   ├── api/             Server API route handlers
│   ├── archive/         Public archive pages
│   ├── papers/          Public paper pages
│   └── registration/    Registration and status pages
├── components/          Shared React and UI components
├── db/schema.ts         Drizzle PostgreSQL schema and database client
├── lib/                 Mail, upload, validation, and API helpers
├── migrations/          Committed Drizzle SQL migrations and metadata
├── auth.ts              NextAuth providers and session callbacks
└── middleware.ts        Admin-route middleware
public/                  Static assets and default local upload root
package.json             Scripts and dependencies
drizzle.config.ts        Drizzle migration configuration
.env.sample              Environment-variable template
```

## Deployment considerations

Before deploying:

1. Provision PostgreSQL and set `AUTH_DRIZZLE_URL`.
2. Configure all authentication secrets and provider callback URLs for the production hostname.
3. Configure SMTP and `NEXT_PUBLIC_BASE_URL` if email workflows are enabled.
4. Run the production build and apply migrations from a controlled release environment.
5. Confirm the process can write to `UPLOAD_DIR`, or provision an external persistent volume.
6. Sign in, verify the user role, and test one admin-only operation.
7. Test registration, email delivery, paper upload, archive upload, and public archive rendering.
8. Establish backups for both PostgreSQL and the upload directory.

The repository does not contain a provider-specific deployment manifest. Configure the host’s build command as `npm run build`, start command as `npm run start`, and supply the environment variables through the host’s secret manager. Do not assume that a successful build proves database connectivity, OAuth configuration, SMTP delivery, or upload persistence.

## Troubleshooting

### Database connection or migration failure

- Confirm `AUTH_DRIZZLE_URL` is present in `.env.local` and contains a reachable PostgreSQL URL.
- Check that the database exists and that the configured user can create or alter tables.
- Run `npm run drizzle:migrate` from the repository root.
- Inspect the migration journal before retrying; do not delete migration history to bypass an error.

### OAuth sign-in fails

- Confirm `NEXTAUTH_SECRET` and `NEXTAUTH_URL` match the environment.
- Confirm the provider client ID and secret are configured with the variable names expected by the provider.
- Add the exact production callback URL to GitHub or Google.
- Check whether the browser is using HTTPS while the deployment is configured with an HTTP URL, or vice versa.

### Registration or contact email is not delivered

- Verify `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `EMAIL_USER`, and `EMAIL_PASS`.
- Use a provider app password where required.
- Confirm `EMAIL_RECIPIENT` is set for contact messages.
- Inspect server logs: registration continues after a confirmation-email failure, so a successful registration response does not prove delivery.

### Upload returns an error or files are missing

- Confirm the authenticated user has the `admin` role for `/api/upload`.
- Check the file type and size; archive uploads must be one of the supported PDF/image formats and no larger than 10 MB.
- Confirm `UPLOAD_DIR` resolves to a writable directory.
- Check that the deployment has persistent storage. Ephemeral instances can remove local files after redeploys.
- Verify that the returned public URL matches the host’s static-file configuration.

### Admin page is inaccessible

- Sign in first and confirm the account exists in the `user` table.
- Confirm the database role is `admin` rather than the default `user`.
- Inspect the session token and server logs for authentication errors.
- Remember that middleware protects the `/admin` path, while individual APIs may apply additional role checks.

### Public archive is empty

- Confirm the archive migration has been applied.
- Initialize categories from `/admin/archive/categories`.
- Create at least one archive year and attach content or accepted papers to it.
- Check that archive records reference the correct year and category IDs.

## Current limitations and future improvements

- Uploads are local filesystem files and need external persistence in production environments that do not retain instance storage.
- There is no repository seed script for the first administrator or conference data.
- Email delivery is best-effort for registration confirmation and requires external SMTP configuration.
- Provider-specific deployment configuration is not committed.
- Cloud object storage, malware scanning, richer upload progress, archive search, and pagination remain future improvements rather than implemented features.
