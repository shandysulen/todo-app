import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { todos } from "@/schemas";
import { protectedProcedure, router } from "../trpc";

export const updateTodoSchema = z.object({
  id: z.number(),
  todo: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const todoRouter = router({
  // CREATE
  add: protectedProcedure
    .input(addTodoSchema)
    .mutation(async ({ input: todo, ctx: { session, db } }) => {
      // Get address from `session`
      const { address } = session;

      // Insert into db
      try {
        const insertResult = await db
          .insert(todos)
          .values({
            ...todo,
            address,
            createdAt: new Date(),
            lastModified: new Date(),
          })
          .run();

        return insertResult.rows[0];
      } catch (err) {
        console.error(err);

        // Log error in monitoring solution
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to add todo.",
        });
      }
    }),

  // READ
  all: protectedProcedure.query(async ({ ctx: { session, db } }) => {
    // Get address from `session`
    const { address } = session;

    // Fetch from db
    try {
      const todosResult = await db
        .select()
        .from(todos)
        .where(eq(todos.address, address))
        .all();

      return todosResult;
    } catch (err) {
      console.error(err);

      // Log error in monitoring solution
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Unable to retrieve todos.",
      });
    }
  }),
  single: protectedProcedure
    .input(z.number())
    .query(async ({ input: id, ctx: { session, db } }) => {
      // Get address from `session`
      const { address } = session;

      // Fetch from db
      try {
        const todosResult = await db
          .select()
          .from(todos)
          .where(eq(todos.address, address))
          .where(eq(todos.id, id))
          .get();

        return todosResult;
      } catch (err) {
        console.error(err);

        // Log error in monitoring solution
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to retrieve todos.",
        });
      }
    }),

  // UPDATE
  update: protectedProcedure
    .input(updateTodoSchema)
    .mutation(async ({ input: { id, todo }, ctx: { db } }) => {
      // Update db row
      try {
        const updateResult = await db
          .update(todos)
          .set({
            ...todo,
            lastModified: new Date(),
          })
          .where(eq(todos.id, id))
          .run();

        return updateResult.rows[0];
      } catch (err) {
        console.error(err);

        // Log error in monitoring solution
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to add todo.",
        });
      }
    }),

  // DELETE
  delete: protectedProcedure
    .input(z.number())
    .mutation(async ({ input: id, ctx: { db } }) => {
      // Delete from db
      try {
        const deleteResult = await db
          .delete(todos)
          .where(eq(todos.id, id))
          .run();

        return deleteResult.rows[0];
      } catch (err) {
        console.error(err);

        // Log error in monitoring solution
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to delete todo.",
        });
      }
    }),
});

export type TodoRouter = typeof todoRouter;
