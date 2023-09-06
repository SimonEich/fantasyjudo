import { createLeagueRouter } from "~/server/api/routers/createLeague";
import { createTRPCRouter } from "~/server/api/trpc";
import { createUserRouter } from "~/server/api/routers/createUser";
import { createTeamRouter } from "./routers/createTeam";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  createLeague: createLeagueRouter,
  createUser: createUserRouter,
  createTeam: createTeamRouter

});

// export type definition of API
export type AppRouter = typeof appRouter;
