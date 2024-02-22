import { createContext, useContext } from "react";

export const AddTodoModalContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {
    console.log("setIsOpen");
  },
  onOpen: () => {
    console.log("open");
  },
  onClose: () => {
    console.log("close");
  },
});

export const useAddTodoDialog = () => {
  const context = useContext(AddTodoModalContext);

  return context;
};
