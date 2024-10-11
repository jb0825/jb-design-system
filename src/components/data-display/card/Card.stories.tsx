import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { css } from "@emotion/react";

const meta = {
  title: "Design System/data-display/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 출처 - https://www.jpl.nasa.gov/images/pia26444-europa-clipper-explores-an-icy-ocean-world-artists-concept/
const mockupImg =
  "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA26444.jpg";

export const Default: Story = {
  args: {
    cover: mockupImg,
    onCoverClick: () => console.log("Clicked!"),
    title: "Card Title",
    content: "This is card content.",
    width: "400px",
    height: "600px",
  },
};

const customTitle = (
  <div
    css={css`
      font-size: 18px;
      font-weight: 500;
      display: flex;
      align-content: center;
      justify-content: space-between;
      border-bottom: 1px solid #dddddd;
      padding: 20px;
      & > a {
        color: #1976d2;
        font-weight: 400;
      }
    `}
  >
    <span>Custom card title</span>
    <a href="">More</a>
  </div>
);
export const CustomTitle: Story = {
  args: {
    cover: mockupImg,
    title: customTitle,
    content: "This is card content.",
    width: "400px",
    height: "600px",
  },
};

const customContent = (
  <div
    css={css`
      padding: 20px;
      & > div {
        margin-bottom: 10px;
        color: #b5b5b5;
      }
      & > a {
        color: #1976d2;
      }
    `}
  >
    <div>👉 This is custom card content.</div>
    <a href="">Click here!</a>
  </div>
);

export const CustomContent: Story = {
  args: {
    cover: mockupImg,
    title: "Card Title",
    content: customContent,
    width: "400px",
    height: "600px",
  },
};
