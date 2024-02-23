import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@todo-app/components";
import { CompleteButton } from "./CompleteButton";
import { TodoCardActions } from "./TodoCardActions";

export interface TodoCardProps {
  id: number;
  name: string;
  description: string | null;
  complete: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = (props) => {
  return (
    <Card>
      <CardHeader className='flex-row'>
        <CardTitle>{props.name}</CardTitle>
        <TodoCardActions {...props} />
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter className='bg-slate-50 border-t justify-between p-4'>
        {props.complete ? (
          <span className='text-sm'>✅ Complete</span>
        ) : (
          <CompleteButton id={props.id} />
        )}
      </CardFooter>
    </Card>
  );
};
