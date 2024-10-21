import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { home, image as imageIcon, search } from "@icons";
import { css } from "@emotion/react";

const meta = {
  title: "Design System/Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "600px",
  },
};

export const Image: Story = {
  args: {
    width: "100px",
    height: "100px",
    icon: imageIcon,
  },
};

export const Example = () => {
  const rounded = {
    width: "50px",
    height: "50px",
    style: { borderRadius: "50%" },
  };
  const image = {
    width: "100px",
    height: "100px",
  };

  return (
    <div
      css={css`
        width: 800px;
        height: 400px;
        display: flex;
        gap: 20px;
      `}
    >
      <div
        css={css`
          flex-shrink: 0;
        `}
      >
        <Skeleton {...rounded} />
      </div>

      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <Skeleton width={"60%"} />
        <Skeleton width={"80%"} />
        <Skeleton width={"40%"} />
        <Skeleton width={"100%"} />
        <div
          css={css`
            margin-top: 60px;
            display: flex;
            gap: 20px;
          `}
        >
          <Skeleton {...image} icon={imageIcon} />
          <Skeleton {...image} icon={home} />
          <Skeleton {...image} icon={search} />
        </div>
      </div>
    </div>
  );
};
