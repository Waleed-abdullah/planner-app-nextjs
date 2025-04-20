-- Drop the existing category column
ALTER TABLE "public"."events" DROP COLUMN "category";

-- Create the new category column
ALTER TABLE "public"."events" ADD COLUMN "category" TEXT;



-- ALTER TABLE "public"."events" ALTER COLUMN "category" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."CategoryEnum";--> statement-breakpoint
CREATE TYPE "public"."CategoryEnum" AS ENUM('ACTIVITIES', 'ARTS_CULTURE', 'BAKERIES', 'BARS', 'BREAKFAST', 'CAFES', 'DINNER', 'KID_FRIENDLY', 'LATE_NIGHT_FOOD', 'LIVE_ENTERTAINMENT', 'LODGING', 'LUNCH', 'MARKETS', 'NEIGHBORHOODS', 'NIGHTLIFE', 'OUTDOOR_DRINKS', 'PARKS_NATURE', 'SERVICES', 'SHOPPING', 'SIGHTSEEING', 'WEEKEND_TRIPS', 'WORKSPACES');--> statement-breakpoint
ALTER TABLE "public"."events" ALTER COLUMN "category" SET DATA TYPE "public"."CategoryEnum" USING "category"::"public"."CategoryEnum";







