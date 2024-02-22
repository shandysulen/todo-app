import { useTodos } from "@/hooks/useTodos";
import { TodoCard } from "./TodoCard";

export const TodoGrid: React.FC = () => {
  const todos = useTodos();

  return (
    <div className='grid grid-cols-1 gap-4 gap-y-5 sm:grid-cols-2 sm:justify-start lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          name={todo.name}
          description={todo.description}
          complete={todo.complete}
        />
      ))}
    </div>
  );
};
