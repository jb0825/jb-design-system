import type { StorybookConfig } from "@storybook/react-webpack5";

const path = require("path");
const resolvePath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../assets"],
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@types": path.resolve(__dirname, "../src/types"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@icons": path.resolve(__dirname, "../assets/icons"),
    };
    // storybook emotion babel setting
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("@emotion/babel-preset-css-prop")],
      },
    });
    return config;
  },
};
export default config;
