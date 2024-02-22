import { type InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";

export const todos = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  address: text("address").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  complete: integer("complete", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  lastModified: integer("last_modified", { mode: "timestamp" }).notNull(),
});

export type DbTodo = InferModel<typeof todos>; // return type when queried
export type NewDbTodo = InferModel<typeof todos, "insert">; // return type when inserted

export const addTodoSchema = z.object({
  name: z.string().min(1, "Required."),
  description: z.string().optional(),
});

export type AddTodo = z.infer<typeof addTodoSchema>;

export const addTodoWithIdSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Required."),
  description: z.string().optional(),
});

export type AddTodoWithId = z.infer<typeof addTodoWithIdSchema>;

// export const editTodoSchema = z.object({
//   name: z.string().min(1, "Required."),
//   description: z.string().optional(),
// });

// export type EditTodo = z.infer<typeof editTodoSchema>;
