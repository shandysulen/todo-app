import { type InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";

export const todos = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  address: text("name", {}).notNull(),
  description: text("description"),
  createdAt: integer("joined_date", { mode: "timestamp" }).notNull(),
  lastModified: integer("joined_date", { mode: "timestamp" }).notNull(),
});

export type DbTodo = InferModel<typeof todos>; // return type when queried
export type NewDbTodo = InferModel<typeof todos, "insert">; // return type when inserted

export const addTodoSchema = z.object({
  name: z.string().min(1, "Required."),
  description: z.string(),
});

export type AddTodoSchema = z.infer<typeof addTodoSchema>;
