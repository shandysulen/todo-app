import { Button } from "@eds/components";
import { Trash } from "lucide-react";

interface DeleteButtonProps {
  readonly onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button
      icon={<Trash size={20} />}
      size='icon'
      variant='outline'
      onClick={onClick}
    />
  );
};
