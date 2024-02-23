import { NavigationMenuContentButtonItem } from "@eds/components";
import { Trash } from "lucide-react";
import { useInvalidateTodoAllQuery } from "@/hooks/useInvalidateTodoAllQuery";
import { trpc } from "../_trpc/client";

export interface DeleteMenuItemProps {
  readonly id: number;
}

export const DeleteMenuItem: React.FC<DeleteMenuItemProps> = ({ id }) => {
  const invalidateTodoAllQuery = useInvalidateTodoAllQuery();
  const { mutate: onDelete } = trpc.todo.delete.useMutation({
    onSuccess: () => {
      void invalidateTodoAllQuery();
    },
    onError: (err) => {
      console.error(err);
      alert("Failed to delete");
    },
  });

  return (
    <NavigationMenuContentButtonItem
      icon={<Trash size={20} />}
      className='text-red-400'
      onClick={() => onDelete(id)}
    >
      Delete
    </NavigationMenuContentButtonItem>
  );
};
