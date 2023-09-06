import { clerkClient, useSession } from "@clerk/nextjs";
import { z } from "zod";
import { privateProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { getSession } from 'next-auth/react';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { TRPCError } from "@trpc/server";



export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });
 
  return {
    session,
  };
};

export const createLeague = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const leagueName = await ctx.prisma.leagues.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });

    return (leagueName);
  }),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

    
      const leagueName = await ctx.prisma.leagues.create({
        data: {
          admin: ctx.userId,
          name: input.content,
        },
      });

      return leagueName;
    }),
});

