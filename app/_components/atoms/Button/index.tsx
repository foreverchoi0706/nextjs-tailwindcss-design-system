import React, { type ButtonHTMLAttributes, forwardRef, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const style = {
	variant: {
		default: "bg-gray_light_2 text-black",
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-black",
		danger: "bg-danger text-white",
	},
	size: {
		sm: "text-sm px-2 py-1",
		md: "text-md px-3 py-2",
		lg: "text-lg px-4 py-3",
	},
};

export type IProps = {
	variant?: keyof typeof style.variant;
	size?: keyof typeof style.size;
};

type TProps<T = unknown> = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & IProps & T>;

const Default = forwardRef<HTMLButtonElement, TProps>(
	({ className, size = "md", variant = "default", ...rest }, ref) => {
		return (
			<button
				ref={ref}
				className={twMerge(
					`rounded border-0 hover:brightness-90 active:brightness-90 ${style.variant[variant]}  ${style.size[size]}`,
					className,
				)}
				{...rest}
			>
				{rest.children}
			</button>
		);
	},
);

const Text = forwardRef<HTMLButtonElement, TProps>(({ className, children, ...rest }, ref) => {
	return (
		<Default ref={ref} className={twMerge(className, "bg-white p-0 text-black")} {...rest}>
			{children}
		</Default>
	);
});

const Component = Default as typeof Default & { Text: typeof Text };
Component.Text = Text;
export default Component;
