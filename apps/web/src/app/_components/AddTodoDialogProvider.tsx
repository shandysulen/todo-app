import { PropsWithChildren } from "react";
import { AddTodoModalContext } from "@/hooks/useAddTodoDialog";
import { useDisclosure } from "@/hooks/useDisclosure";

export const AddTodoDialogProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { isOpen, setIsOpen, onClose, onOpen } = useDisclosure();

  return (
    <AddTodoModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        onClose,
        onOpen,
      }}
    >
      {children}
    </AddTodoModalContext.Provider>
  );
};
