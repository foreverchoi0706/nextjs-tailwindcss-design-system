import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { Chip } from "./index.d";

const DEFAULT_STYLE = "rounded px-2 py-1 text-xs";

const Default = forwardRef<HTMLSpanElement, Chip.Props>(
	({ textColor, bgColor, className, children, ...rest }, ref) => (
		<span
			ref={ref}
			className={twMerge(`${DEFAULT_STYLE} ${textColor} ${bgColor}`, className)}
			{...rest}
		>
			{children}
		</span>
	),
);

const Component = Default as typeof Default;
export default Component;
