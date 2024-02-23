import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const useInvalidateQueries = (input: any) => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: getQueryKey(input) });
};
