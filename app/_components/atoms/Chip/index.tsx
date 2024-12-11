import type { TBgColor, TTextColor } from "@/app/_types/tw";
import React, { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type IProps = {
	bgColor: TBgColor;
	textColor: TTextColor;
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
