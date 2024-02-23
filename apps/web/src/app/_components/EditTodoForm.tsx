"use client";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@eds/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { trpc } from "@/app/_trpc/client";
import { useEditTodoDialog } from "@/hooks/useEditTodoDialog";
import { useInvalidateTodoAllQuery } from "@/hooks/useInvalidateTodoAllQuery";
import { addTodoSchema, type AddTodo } from "@/schemas/todos";

export interface EditTodoFormProps {
  readonly id: number;
  readonly todo: AddTodo;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ id, todo }) => {
  const { setTodo } = useEditTodoDialog();
  const invalidateTodoAllQuery = useInvalidateTodoAllQuery();
  const { mutate } = trpc.todo.update.useMutation({
    onSuccess: () => {
      void invalidateTodoAllQuery();
      setTodo(undefined);
    },
    onError: (error) => {
      console.error("error", error);
    },
  });

  const form = useForm<AddTodo>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: todo,
  });

  const onSubmit = (data: AddTodo) => {
    console.log("submission", data);
    mutate({ id, todo: data });
  };

  // const hasErrors = useMemo(
  //   () => !!form.formState.errors.name,
  //   [form.formState.errors],
  // );
  // const isDirty = useMemo(
  //   () => form.formState.isDirty,
  //   [form.formState.isDirty],
  // );
  // const isButtonDisabled = useMemo(
  //   () => !isDirty || hasErrors,
  //   [isDirty, hasErrors],
  // );

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-4 mt-4'
        onSubmit={void form.handleSubmit(onSubmit)}
      >
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormDescription>
                Be descriptive enough to recognize the todo later on!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='description'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Description' {...field} />
              </FormControl>
              <FormDescription>Add juicy details! (Optional)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
