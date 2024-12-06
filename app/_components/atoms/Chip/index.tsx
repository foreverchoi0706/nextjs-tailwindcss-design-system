import type tailwindConfig from "@/tailwind.config";
import React, { forwardRef, type HTMLAttributes, JSX, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type IProps = {
	textColor: `text-${keyof typeof tailwindConfig.theme.extend.colors}`;
	bgColor: `bg-${keyof typeof tailwindConfig.theme.extend.colors}`;
};

type TProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement> & IProps>;

const Default = forwardRef<HTMLSpanElement, TProps>(
	({ textColor, bgColor, className, children, ...rest }, ref) => {
		return (
			<span
				ref={ref}
				className={twMerge(`rounded px-2 py-1 text-xs ${textColor} ${bgColor}`, className)}
				{...rest}
			>
				{children}
			</span>
		);
	},
);

const Component = Default as typeof Default;
export default Component;
