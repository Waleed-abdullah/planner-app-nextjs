--  add column category
ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "category" CategoryEnum;
ALTER TABLE "events" ALTER COLUMN "category" SET NOT NULL;
