import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionItem, AccordionProps } from "@types";
import { css } from "@emotion/react";
import React from "react";

const meta = {
  title: "Design System/Surfaces/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const temp = (
  <div
    css={css`
      padding: 15px;
      h1 {
        margin-top: 0;
      }
    `}
  >
    <h1>🥰 Hello</h1>This is Accordion.
  </div>
);
const mockup: AccordionItem[] = [
  {
    key: "1",
    label: "Accordion Item 1",
    children: temp,
    expended: true,
  },
  {
    key: "2",
    label: "Accordion Item 2",
    children: temp,
  },
  {
    key: "3",
    label: "Accordion Item 3",
    children: temp,
    expended: false,
  },
];

export const Default = ({ items = mockup }: AccordionProps) => {
  return (
    <div
      css={css`
        width: 500px;
        height: 50vh;
      `}
    >
      <Accordion items={items} />
    </div>
  );
};
