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
		textColor: "text-black_light",
		bgColor: "bg-gray_light_3",
	},
	render: ({ children, bgColor, textColor, ...rest }) => (
		<div className="flex flex-wrap gap-4">
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
			<Component textColor="text-black_light" bgColor="bg-gray_light_3" {...rest}>
				{children}
			</Component>
		</div>
	),
};
