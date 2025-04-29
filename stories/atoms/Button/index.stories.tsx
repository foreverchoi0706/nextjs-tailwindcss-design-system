import type { Meta, StoryObj } from "@storybook/react";

import Component from "./index";

const meta = {
  title: "atoms/Button",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      control: "text",
    },
    size: {
      type: "symbol",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      type: "symbol",
      control: "select",
      options: ["default", "primary", "secondary", "danger"],
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    size: "md",
    variant: "default",
  },
  render: ({ children, ...rest }) => (
    <Component {...rest}>{children}</Component>
  ),
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
  render: ({ children, ...rest }) => (
    <div className="flex items-center gap-4">
      <Component {...rest} size="sm">
        {children}
      </Component>
      <Component {...rest} size="md">
        {children}
      </Component>
      <Component {...rest} size="lg">
        {children}
      </Component>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
  render: ({ children, ...rest }) => (
    <div className="flex items-center gap-4">
      <Component {...rest} size="sm">
        {children}
      </Component>
      <Component {...rest} size="md">
        {children}
      </Component>
      <Component {...rest} size="lg">
        {children}
      </Component>
    </div>
  ),
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
  render: ({ children, ...rest }) => (
    <div className="flex items-center gap-4">
      <Component {...rest} size="sm">
        {children}
      </Component>
      <Component {...rest} size="md">
        {children}
      </Component>
      <Component {...rest} size="lg">
        {children}
      </Component>
    </div>
  ),
};

export const Text: Story = {
  args: {
    children: "Text",
  },
  render: ({ children, ...rest }) => (
    <div className="flex items-center gap-4">
      <Component.Text {...rest} size="sm">
        {children}
      </Component.Text>
      <Component.Text {...rest} size="md">
        {children}
      </Component.Text>
      <Component.Text {...rest} size="lg">
        {children}
      </Component.Text>
    </div>
  ),
};
