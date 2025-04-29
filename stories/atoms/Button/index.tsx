import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { Button } from "./index.d";

const DEFAULT_STYLE =
  "rounded border-0 hover:brightness-90 active:brightness-90" as const;

export const VARIANT = {
  variant: {
    default: "bg-white border border-gray-300 text-black",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black",
    danger: "bg-danger text-white",
  },
  size: {
    sm: "text-md px-2 py-1",
    md: "text-md px-3 py-2",
    lg: "text-md px-4 py-3",
  },
} as const;

const Default = forwardRef<HTMLButtonElement, Button.Props>(
  ({ className, size = "md", variant = "default", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          `${DEFAULT_STYLE} ${VARIANT.variant[variant]}  ${VARIANT.size[size]}`,
          className
        )}
        {...rest}
      >
        {rest.children}
      </button>
    );
  }
);

const Text = forwardRef<HTMLButtonElement, Button.Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <Default
        ref={ref}
        className={twMerge(className, "bg-transparent p-0 text-black")}
        {...rest}
      >
        {children}
      </Default>
    );
  }
);

const Component = Default as typeof Default & { Text: typeof Text };
Component.Text = Text;
export default Component;
