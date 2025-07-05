UPDATE "user" SET "role" = 'user' WHERE "role" IS NULL;
ALTER TABLE "user" ALTER COLUMN "role" SET NOT NULL;
