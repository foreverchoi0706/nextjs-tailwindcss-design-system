import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Component from "./index";

const meta = {
	title: "atoms/Input",
	component: Component,
	tags: ["autodocs"],
	argTypes: {
		size: {
			type: "symbol",
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (props) => <Component {...props} />,
};
