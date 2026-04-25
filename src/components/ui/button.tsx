import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  className,
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Comp
      className={cn(
        "bg-primary text-primary-foreground rounded-md flex items-center justify-center",
        "hover:opacity-90 transition",
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}