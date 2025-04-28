import {
  forwardRef,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

const DEFAULT_STYLE =
  "rounded border-none bg-gray_light_2 text-black_light outline-0" as const;

const VARIANT = {
  size: {
    sm: "text-sm px-3 py-2",
    md: "text-md px-3 py-2",
    lg: "text-lg px-3 py-3",
  },
} as const;

export type IProps = {
  size?: keyof typeof VARIANT.size;
};

type TProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement> & IProps>;

const Default = forwardRef<HTMLInputElement, TProps>(
  ({ className, size, ...rest }, ref) => {
    let style = "";

    if (size !== undefined) style += ` ${VARIANT.size[size]}`;

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
