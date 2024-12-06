import {
	type ElementType,
	type HTMLAttributes,
	type PropsWithChildren,
	createElement,
	forwardRef,
} from "react";

type TPropsWithAsChildren<T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>> = {
	as?: ElementType;
} & PropsWithChildren<T>;

const Default = forwardRef<HTMLElement, TPropsWithAsChildren>(({ as = "div", ...rest }, ref) => {
	return createElement(as, {
		ref,
		...rest,
	});
});

export default Default;
