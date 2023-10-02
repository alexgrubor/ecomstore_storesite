import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";
interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
