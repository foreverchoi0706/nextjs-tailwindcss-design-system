import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Component from "./index";

const meta = {
	title: "atoms/Chip",
	component: Component,
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Default",
	},
	render: ({ children, ...rest }) => (
		<div className="flex flex-wrap gap-4">
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
			<Component {...rest}>{children}</Component>
		</div>
	),
};
