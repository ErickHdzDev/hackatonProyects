import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";
import type {CreateNextContextOptions} from "@trpc/server/adapters/next";


export const createContext = (opts: CreateNextContextOptions) => {
    return {};
}

const createTRPCRouter = initTRPC.context<typeof createContext>().create({
    errorFormatter({ shape, error }) {
      if (error.cause instanceof ZodError) {
        return {
          ...shape,
          data: {
            ...shape.data,
            zodError: error.cause.flatten(),
          },
        };
      }
      return shape;
    },
});

export const router = createTRPCRouter;
export const publicProcedure = createTRPCRouter.procedure;