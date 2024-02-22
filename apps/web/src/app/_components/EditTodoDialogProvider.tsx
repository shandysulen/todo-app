import { PropsWithChildren, useState } from "react";
import { EditTodoDialogContext } from "@/hooks/useEditTodoDialog";
import { type AddTodoWithId } from "@/schemas/todos";

export const EditTodoDialogProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todo, setTodo] = useState<AddTodoWithId | undefined>();

  return (
    <EditTodoDialogContext.Provider
      value={{
        todo,
        setTodo,
      }}
    >
      {children}
    </EditTodoDialogContext.Provider>
  );
};
