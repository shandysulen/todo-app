"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@eds/components";
import { useEditTodoDialog } from "@/hooks/useEditTodoDialog";
import { EditTodoForm } from "./EditTodoForm";

export const EditTodoDialog: React.FC = () => {
  const { todo, setTodo } = useEditTodoDialog();

  return (
    <Dialog open={!!todo} onOpenChange={() => setTodo(undefined)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>Edit your todo</DialogDescription>
          {todo && (
            <EditTodoForm
              id={todo.id}
              todo={{ name: todo.name, description: todo.description }}
            />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
