import { createContext, useContext } from "react";
import { type AddTodoWithId } from "@/schemas/todos";

export const EditTodoDialogContext = createContext({
  todo: undefined as AddTodoWithId | undefined,
  setTodo: (value: AddTodoWithId | undefined) => {
    console.log("setId");
  },
  // isOpen: false,
  // setIsOpen: (value: boolean) => {
  //   console.log("setIsOpen");
  // },
  // onOpen: () => {
  //   console.log("open");
  // },
  // onClose: () => {
  //   console.log("close");
  // },
});

export const useEditTodoDialog = () => {
  const context = useContext(EditTodoDialogContext);

  return context;
};
