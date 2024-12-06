import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { db } from "~/server/db/db";
import { projects, tasks } from "~/server/db/schemas"


export const projectRouter = router({
    createProject: publicProcedure
    .input(z.object(
        {name: z.string().min(1, "El proyecto debe tener un nombre")})).mutation(async ({input}) => {
        const project = await db.insert(projects).values({name: input.name}).returning();
        return project;
    }),
    listProjects: publicProcedure.query(async () => {
        const r_projects = await db.select().from(projects);
        return r_projects;
    }),
    getProject: publicProcedure.input(z.object({id: z.string()})).query(async ({input}) => {
        const project = await db.select().from(projects).where(eq(projects.id, input.id));
        return project[0];
    })

})