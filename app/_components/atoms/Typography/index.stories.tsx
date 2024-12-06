import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Component from "./index";

const meta = {
	title: "atoms/Typography",
	component: Component,
	tags: ["autodocs"],
	argTypes: {
		as: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Typography",
	},
	render: (props) => <Component {...props} />,
};
