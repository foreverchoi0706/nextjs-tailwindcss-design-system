import type { Meta, StoryObj } from "@storybook/react";

import Component from "./index";

const meta = {
  title: "compounds/Dropdown",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onItemClick: console.log,
    value: "Item1",
  },
  render: ({ children, ...rest }) => (
    <Component {...rest}>
      <Component.Item value="Item1">Item1</Component.Item>
      <Component.Item value="Item2">Item2</Component.Item>
      <Component.Item value="Item3">Item3</Component.Item>
    </Component>
  ),
};
