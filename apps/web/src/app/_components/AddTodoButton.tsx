import { Button } from "@eds/components";
import { Plus } from "lucide-react";
import { useAddTodoDialog } from "@/hooks/useAddTodoDialog.js";

export const AddTodoButton: React.FC = () => {
  const { onOpen } = useAddTodoDialog();

  return (
    <Button icon={<Plus size={20} />} onClick={onOpen}>
      Add
    </Button>
  );
};
