import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";
import { CheckboxGroupProps, GroupItems } from "@types";
import { css } from "@emotion/react";
import { Button } from "../button/Button";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Design System/Inputs/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof CheckboxGroup>;

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

export const Example = (args: CheckboxGroupProps) => {
  const [values, setValues] = useState<string[]>([]);

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
          onClick={() => setValues(["value 2"])}
          width="50%"
        />
        <Button label="RESET" onClick={() => setValues([])} width="50%" />
      </div>
      <Checkbox
        label="Check All"
        required={true}
        checked={items.length === values.length}
        indeterminate={items.length > values.length && values.length !== 0}
        onValueChange={(checked) => {
          setValues(checked ? items.map((i) => i.value) : []);
        }}
      />
      <div
        css={css`
          border: 1px solid #ddd;
        `}
      />
      <CheckboxGroup
        {...args}
        items={items}
        value={values}
        onValueChange={setValues}
      />
    </div>
  );
};
