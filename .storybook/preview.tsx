import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/GlobalStyle";
import React from "react";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
