import { trpc } from "@/app/_trpc/client";
import { useInvalidateQueries } from "./useInvalidateQueries";

export const useInvalidateTodoAllQuery = () => {
  const invalidateTodoAllQuery = useInvalidateQueries(trpc.todo.all);

  return invalidateTodoAllQuery;
};
