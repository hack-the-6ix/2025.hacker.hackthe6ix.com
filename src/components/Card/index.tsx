import { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  size: "small" | "medium" | "large" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, className, children, ...props }, ref) => {
    const sizeClasses = {
      small: "px-3 py-1 text-sm",
      medium: "px-4 py-2 text-md",
      large: "px-5 py-3 text-lg",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={`rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          ${sizeClasses[size]} 
          ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
