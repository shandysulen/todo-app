import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@eds/components";
import { CircleEllipsis } from "lucide-react";
import { useTriggerFix } from "@/hooks/useTriggerFix";
import { DeleteMenuItem } from "./DeleteMenuItem";
import { EditMenuItem } from "./EditMenuItem";
import { TodoCardProps } from "./TodoCard";

export const TodoCardActions: React.FC<TodoCardProps> = (props) => {
  const fix = useTriggerFix();

  return (
    <NavigationMenu position='right' className='absolute top-0 right-0'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger {...fix}>
            <CircleEllipsis size='20px' className='text-muted' />
          </NavigationMenuTrigger>
          <NavigationMenuContent className='px-2 py-2'>
            <EditMenuItem
              id={props.id}
              name={props.name}
              description={props.description || ""}
            />
            <DeleteMenuItem id={props.id} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
