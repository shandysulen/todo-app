import { createContext, useContext } from "react";
import { type AddTodoWithId } from "@/schemas/todos";

export const EditTodoDialogContext = createContext({
  todo: undefined as AddTodoWithId | undefined,
  setTodo: (value: AddTodoWithId | undefined) => {
    console.log("setTodo:", value);
  },
});

export const useEditTodoDialog = () => {
  const context = useContext(EditTodoDialogContext);

  return context;
};
