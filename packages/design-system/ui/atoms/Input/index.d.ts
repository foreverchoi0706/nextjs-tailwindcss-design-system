import type { InputHTMLAttributes } from "react";
import type { VARIANT } from "./index";

export declare namespace Input {
	interface Props extends InputHTMLAttributes<HTMLInputElement> {
		size?: keyof typeof VARIANT.size;
	}
}
