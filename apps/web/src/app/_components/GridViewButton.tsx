import { Button } from "@todo-app/components";
import { Grid } from "lucide-react";

export const GridViewButton: React.FC = () => {
  return <Button icon={<Grid size={20} />} variant='outline' />;
};
