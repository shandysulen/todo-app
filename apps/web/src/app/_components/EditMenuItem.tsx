import { NavigationMenuContentButtonItem } from "@eds/components";
import { Pencil } from "lucide-react";
import { useEditTodoDialog } from "@/hooks/useEditTodoDialog";
import { AddTodoWithId } from "@/schemas/todos";

export const EditMenuItem: React.FC<AddTodoWithId> = (props) => {
  const { setTodo } = useEditTodoDialog();

  return (
    <NavigationMenuContentButtonItem
      icon={<Pencil size={20} />}
      onClick={() => setTodo(props)}
    >
      Edit
    </NavigationMenuContentButtonItem>
  );
};
