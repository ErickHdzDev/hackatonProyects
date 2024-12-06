ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "proyects" DROP CONSTRAINT "proyects_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "proyects" DROP COLUMN IF EXISTS "created_by";--> statement-breakpoint
ALTER TABLE "tasks" DROP COLUMN IF EXISTS "created_by";