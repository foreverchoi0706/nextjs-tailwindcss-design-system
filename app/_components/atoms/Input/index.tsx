import React, { forwardRef, type InputHTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const style = {
	size: {
		sm: "text-sm px-3 py-2",
		md: "text-md px-3 py-2",
		lg: "text-lg px-3 py-3",
	},
};

export type IProps = {
	size?: keyof typeof style.size;
};

type TProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement> & IProps>;

const Default = forwardRef<HTMLInputElement, TProps>(({ className, size = "md", ...rest }, ref) => {
	return (
		<input
			ref={ref}
			className={twMerge(
				`rounded border-none bg-gray_light_2 text-black_light outline-0 ${style.size[size]}}`,
				className,
			)}
			{...rest}
		/>
	);
});

const Component = Default as typeof Default;
export default Component;
