import { trpc } from "@/app/_trpc/client";
import { noRefetch } from "@/constants/noRefetch";

export const useTodos = () => {
  const [data] = trpc.todo.all.useSuspenseQuery(undefined, {
    ...noRefetch,
  });

  return data;
};
