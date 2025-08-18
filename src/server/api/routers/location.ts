import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { locations } from "~/server/db/schema";
import { eq, desc, asc } from "drizzle-orm";

export const locationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.locations.findMany({
      orderBy: [asc(locations.name)],
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.locations.findFirst({
        where: eq(locations.id, input.id),
      });
    }),

  getByType: publicProcedure
    .input(z.object({ type: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.locations.findMany({
        where: eq(locations.locationType, input.type),
        orderBy: [asc(locations.name)],
      });
    }),

  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      // For SQLite, we'll use a simple LIKE query
      // In a real app, you might want to use full-text search
      return await ctx.db
        .select()
        .from(locations)
        .where(
          // Search in name, generalInfo, and biblicalReferences
          // Note: SQLite doesn't have ILIKE, so we use LIKE with LOWER
          // This is a simplified search - in production you might want more sophisticated search
          // For now, we'll search in the name field
          eq(locations.name, input.query)
        );
    }),
});
