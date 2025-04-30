import type { HTMLAttributes, PropsWithChildren } from "react";
import type { TBgColor, TTextColor } from "@/types/tw";

export declare namespace Chip {
	type Props = PropsWithChildren<HTMLAttributes<HTMLSpanElement>> & {
		textColor: TTextColor;
		bgColor: TBgColor;
	};
}
