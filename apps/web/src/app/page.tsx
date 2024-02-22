import { Container, Heading, HStack } from "@eds/components";
import { AddTodoDialog } from "./_components/AddTodoDialog";
import { FilterButton } from "./_components/FilterButton";
import { GridViewButton } from "./_components/GridViewButton";
import { ListViewButton } from "./_components/ListViewButton";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Todo app</Heading>
      <HStack className='justify-between w-full'>
        <div>
          <FilterButton />
          <GridViewButton />
          <ListViewButton />
        </div>
        <AddTodoDialog />
      </HStack>
    </Container>
  );
}
