import { Button } from "@todo-app/components";
import confetti from "canvas-confetti";
import { useInvalidateTodoAllQuery } from "@/hooks/useInvalidateTodoAllQuery";
import { trpc } from "../_trpc/client";

export interface CompleteButtonProps {
  readonly id: number;
}

export const CompleteButton: React.FC<CompleteButtonProps> = ({ id }) => {
  const invalidateTodoAllQuery = useInvalidateTodoAllQuery();
  const { mutate: update } = trpc.todo.update.useMutation({
    onSuccess: () => {
      void confetti({
        particleCount: 400,
        startVelocity: 90,
        gravity: 10,
        spread: 50,
      });
      void invalidateTodoAllQuery();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <Button onClick={() => update({ id, todo: { complete: true } })}>
      🎉 Complete
    </Button>
  );
};
