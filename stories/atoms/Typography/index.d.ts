import type { ElementType, HTMLAttributes, PropsWithChildren } from "react";

export declare namespace Typography {
	type Props<T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>> = {
		as?: ElementType;
	} & PropsWithChildren<T>;
}
