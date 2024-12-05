import React, { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type IProps = {};

type TProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement> & IProps>;

const Default = forwardRef<HTMLSpanElement, TProps>(({ className, children, ...rest }, ref) => {
	return (
		<span
			ref={ref}
			className={twMerge("rounded bg-amber-100 px-3 py-1 text-black text-sm", className)}
			{...rest}
		>
			{children}
		</span>
	);
});

const Component = Default as typeof Default;
export default Component;
