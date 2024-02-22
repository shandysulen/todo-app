import { createContext, useContext } from "react";

export const AddTodoModalContext = createContext({
  isOpen: false,
  onOpen: () => {
    console.log("open");
  },
  onClose: () => {
    console.log("close");
  },
});

export const useAddTodoModal = () => {
  const context = useContext(AddTodoModalContext);

  return context;
};

createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
