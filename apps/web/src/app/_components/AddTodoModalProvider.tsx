import { PropsWithChildren } from "react";
import { AddTodoModalContext } from "@/hooks/useAddTodoModal";
import { useDisclosure } from "@/hooks/useDisclosure";

export const AddTodoModalProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <AddTodoModalContext.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
      }}
    >
      {children}
      {/* {isOpen && <AddTodoModal />} */}
    </AddTodoModalContext.Provider>
  );
};
