import { createContext, useContext } from "react";

export const AddTodoModalContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {
    console.log("setIsOpen:", value);
  },
  onOpen: () => {
    console.log("onOpen");
  },
  onClose: () => {
    console.log("onClose");
  },
});

export const useAddTodoDialog = () => {
  const context = useContext(AddTodoModalContext);

  return context;
};
