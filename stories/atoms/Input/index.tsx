import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { Input } from "./index.d";

const DEFAULT_STYLE =
  "rounded border border-gray-300 px-4 py-2 outline-0" as const;

export const VARIANT = {
  size: {
    sm: "text-sm px-3 py-2",
    md: "text-md px-3 py-2",
    lg: "text-lg px-3 py-3",
  },
} as const;

const Default = forwardRef<HTMLInputElement, Input.Props>(
  ({ className, size, ...rest }, ref) => {
    let style = "";

    if (size !== undefined) style += `${VARIANT.size[size]}`;

    return (
      <input
        ref={ref}
        className={twMerge(`${DEFAULT_STYLE} ${style}`, className)}
        {...rest}
      />
    );
  }
);

const Component = Default as typeof Default;
export default Component;
