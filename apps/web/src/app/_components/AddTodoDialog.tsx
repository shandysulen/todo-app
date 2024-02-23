"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@todo-app/components";
import { useAddTodoDialog } from "@/hooks/useAddTodoDialog";
import { AddTodoForm } from "./AddTodoDialog/AddTodoForm";

export const AddTodoDialog: React.FC = () => {
  const { isOpen, setIsOpen } = useAddTodoDialog();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add a todo with a name and description.
          </DialogDescription>
          <AddTodoForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
