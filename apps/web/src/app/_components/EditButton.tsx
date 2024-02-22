import { Button } from "@eds/components";
import { Pencil } from "lucide-react";

export interface EditButtonProps {
  readonly onClick: () => void;
}

export const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Button
      icon={<Pencil size={20} />}
      onClick={onClick}
      size='icon'
      variant='outline'
    />
  );
};
