import { Button } from "@todo-app/components";
import { Filter } from "lucide-react";

export const FilterButton: React.FC = () => {
  return <Button icon={<Filter size={20} />} variant='outline' />;
};
