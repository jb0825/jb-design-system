import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Design System/Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "checkbox value",
    label: "Checkbox",
    onValueChange: console.log,
  },
};
