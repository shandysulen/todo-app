import { Heading } from "@todo-app/components";
import type { PropsWithChildren } from "react";

export const SitemapHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <Heading as='h2' className='font-bold text-sm'>
    {children}
  </Heading>
);
