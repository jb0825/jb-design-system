import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { GroupItems, RadioGroupProps } from "@types";
import { useState } from "react";
import { css } from "@emotion/react";
import { Button } from "../button/Button";

const meta = {
  title: "Design System/Inputs/RadioGroup",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: GroupItems[] = [
  { value: "value 1", label: "Value 1" },
  { value: "value 2", label: "Value 2" },
  { value: "value 3", label: "Value 3" },
];

export const Default: Story = {
  args: {
    items,
    onValueChange: console.log,
  },
};

export const Example = (args: RadioGroupProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <Button
          label="SET VALUES"
          type="primary"
          onClick={() => setValue("value 2")}
          width="50%"
        />
        <Button label="RESET" onClick={() => setValue("")} width="50%" />
      </div>
      <RadioGroup
        {...args}
        items={items}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};
