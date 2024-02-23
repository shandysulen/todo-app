import { AsProps } from "@/types/as";
import { cn } from "@/utils/cn";

export interface StackProps
  extends React.ComponentPropsWithoutRef<"div">,
    AsProps {}

export const Stack: React.FC<StackProps> = ({ as, className, ...props }) => {
  const Comp = as ?? "div";

  return (
    <Comp
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
};
