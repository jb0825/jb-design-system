import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import { css } from "@emotion/react";

const meta = {
  title: "Design System/Feedback/Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 70,
    width: "300px",
  },
};

export const Line = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 400px;
      `}
    >
      <Progress value={40} />
      <Progress value={80} status="active" />
      <Progress value={60} status="exception" />
      <Progress value={100} />
    </div>
  );
};

export const Circle = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      `}
    >
      <Progress type="circle" width="150px" value={75} />
      <Progress type="circle" width="150px" value={75} showStatus={false} />
      <Progress type="circle" width="150px" value={75} status="exception" />
      <Progress type="circle" width="150px" value={100} />
    </div>
  );
};
