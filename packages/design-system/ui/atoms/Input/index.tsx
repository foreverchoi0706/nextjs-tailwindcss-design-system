import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { Input } from "./index.d";

const DEFAULT_STYLE =
	"rounded border border-gray-300 outline-0 w-full bg-no-repeat bg-[url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person.svg')] bg-[length:15%] bg-right-0" as const;

export const VARIANT = {
	size: {
		sm: "text-sm px-3 py-2",
		md: "text-md px-3 py-2",
		lg: "text-lg px-3 py-3",
	},
};

const Default = forwardRef<HTMLInputElement, Input.Props>(
	({ className, size = "md", ...rest }, ref) => {
		const style = `${VARIANT.size[size]}`;

		return (
			<input ref={ref} className={twMerge(`${DEFAULT_STYLE} ${style}`, className)} {...rest} />
		);
	},
);

const Component = Default as typeof Default;
export default Component;
