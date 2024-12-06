import { createTRPCRouter } from "~/server/api/trpc";
import { projectRouter } from "./routers/project";

export const appRouter = createTRPCRouter({
    project: projectRouter,
});

export type AppRouter = typeof appRouter;