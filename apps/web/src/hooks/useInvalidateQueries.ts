import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";

export const useInvalidateQueries = (input: any) => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: getQueryKey(input) });
};
