import type { Meta } from "@storybook/react";
import { Carousel } from "./Carousel";
import React from "react";
import { css } from "@emotion/react";
import { CarouselProps } from "@types";

const meta = {
  title: "Design System/Data Display/Carousel",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Carousel>;

export default meta;

export const Default = (props: CarouselProps) => {
  const itemCss = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #364d79;
    color: #fff;
  `;

  return (
    <div
      css={css`
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 80%;
        `}
      >
        <Carousel {...props}>
          <div css={itemCss}>Item 1</div>
          <div css={itemCss}>Item 2</div>
          <div css={itemCss}>Item 3</div>
          <div css={itemCss}>Item 4</div>
        </Carousel>
      </div>
    </div>
  );
};
