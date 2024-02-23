import { Container, Heading } from "@eds/components";
import { Content } from "./_components/Content";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Todo App</Heading>
      <Content />
    </Container>
  );
}
