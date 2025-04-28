import type { ButtonHTMLAttributes } from "react";
import type { VARIANT } from "./index";

export declare namespace Button {
	interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
		variant?: keyof typeof VARIANT.variant;
		size?: keyof typeof VARIANT.size;
	}
}
