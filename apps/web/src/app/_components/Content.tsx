"use client";

import { HStack, Stack } from "@todo-app/components";
import { ConnectKitButton, useSIWE } from "connectkit";
import { AddTodoButton } from "./AddTodoButton";
import { FilterButton } from "./FilterButton";
import { GridViewButton } from "./GridViewButton";
import { ListViewButton } from "./ListViewButton";
import { SuspenseTodoGrid } from "./SuspenseTodoGrid";

export const Content: React.FC = () => {
  /* eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment */
  const { isSignedIn } = useSIWE();

  if (!isSignedIn) {
    return <ConnectKitButton />;
  }

  return (
    <Stack className='w-full'>
      <HStack className='justify-between w-full'>
        <div className='flex gap-2'>
          <FilterButton />
          <GridViewButton />
          <ListViewButton />
        </div>
        <AddTodoButton />
      </HStack>
      <SuspenseTodoGrid />
    </Stack>
  );
};
