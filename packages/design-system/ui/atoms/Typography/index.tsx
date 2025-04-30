import { createElement, forwardRef } from "react";
import type { Typography } from "./index.d";

const Default = forwardRef<HTMLElement, Typography.Props>(({ as = "div", ...rest }, ref) => {
	return createElement(as, {
		ref,
		...rest,
	});
});

export default Default;
