import {
  type ButtonHTMLAttributes,
  forwardRef,
  type PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

const DEFAULT_STYLE =
  "rounded border-0 hover:brightness-90 active:brightness-90" as const;

const VARIANT = {
  variant: {
    default: "bg-gray_light_2 text-black",
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

export type IProps = {
  variant?: keyof typeof VARIANT.variant;
  size?: keyof typeof VARIANT.size;
};

type TProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & IProps
>;

const Default = forwardRef<HTMLButtonElement, TProps>(
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

const Text = forwardRef<HTMLButtonElement, TProps>(
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
