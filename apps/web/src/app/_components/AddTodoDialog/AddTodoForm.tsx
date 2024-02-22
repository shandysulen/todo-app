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
import confetti from "canvas-confetti";
import { useForm } from "react-hook-form";
import { trpc } from "@/app/_trpc/client";
import { AddTodoSchema, addTodoSchema } from "@/schemas/todos";

export const AddTodoForm: React.FC = () => {
  const { mutate } = trpc.todo.add.useMutation({
    onSuccess: () => {
      confetti({
        particleCount: 400,
        startVelocity: 90,
        gravity: 10,
        spread: 50,
      });
      alert("success!");
    },
    onError: () => {
      alert("error");
    },
  });

  const form = useForm<AddTodoSchema>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: AddTodoSchema) => {
    console.log("submission", data);
    mutate(data);

    // use mutate from trpc query hook to add a todo
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
        onSubmit={form.handleSubmit(onSubmit)}
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
