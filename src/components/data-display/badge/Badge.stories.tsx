import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Button } from "@components/inputs/button/Button";
import { css } from "@emotion/react";
import { useState } from "react";

const meta = {
  title: "Design System/Data Display/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     children: <Button label="BUTTON !" onClick={() => {}} />,
//     value: "New",
//   },
// };

export const Default = () => {
  const [isVisible, toggleVisible] = useState(true);
  const [isVisible2, toggleVisible2] = useState(true);
  const [count, setCount] = useState(99);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 30px;
      `}
    >
      {/* 문자열 배지 */}
      <div>
        <Badge value="New" isVisible={isVisible}></Badge>
        <Button label="Click here" onClick={() => toggleVisible(!isVisible)} />
      </div>

      {/* 내용 없는 배지 */}
      <div>
        <Badge isVisible={isVisible2} />
        <Button
          label="Click here"
          onClick={() => toggleVisible2(!isVisible2)}
        />
      </div>

      {/* 숫자 배지 */}
      <div>
        <Badge value={count}></Badge>
        <Button label="Click here" onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
};
