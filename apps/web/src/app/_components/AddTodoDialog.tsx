"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@eds/components";
import { Plus } from "lucide-react";
import { useAddTodoModal } from "@/hooks/useAddTodoModal";
import { AddTodoForm } from "./AddTodoDialog/AddTodoForm";

export const AddTodoDialog: React.FC = () => {
  const { onOpen } = useAddTodoModal();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button icon={<Plus size={20} />} onClick={onOpen}>
          Add
        </Button>
      </DialogTrigger>
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
