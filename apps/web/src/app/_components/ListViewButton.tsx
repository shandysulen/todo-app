import { Button } from "@todo-app/components";
import { List } from "lucide-react";

export const ListViewButton: React.FC = () => {
  return <Button icon={<List size={20} />} variant='outline' />;
};
