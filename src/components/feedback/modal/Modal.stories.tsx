import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { ModalProps } from "@types";
import { Button } from "@components/inputs";

const meta = {
  title: "Design System/Feedback/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default",
    description: "This is a default Modal.",
    isVisible: true,
    locale: "en",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Info",
    description: "This is a info Modal.",
    isVisible: true,
    locale: "en",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    description: "This is a success Modal.",
    isVisible: true,
    locale: "en",
  },
};

export const Confirm: Story = {
  args: {
    type: "confirm",
    title: "Confirm",
    description: "This is a confirm Modal.",
    isVisible: true,
    locale: "en",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error",
    description: "This is a error Modal.",
    isVisible: true,
    locale: "en",
  },
};

export const CustomButtons: Story = {
  args: {
    title: "Custom buttons",
    description: "Use custom buttons!",
    isVisible: true,
    buttons: [
      <Button type="primary" label="CUSTOM" onClick={() => {}} />,
      <Button label="CUSTOM2" onClick={() => {}} />,
      <Button label="CUSTOM3" onClick={() => {}} />,
    ],
    width: 600,
  },
};

export const Example = (props: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Modal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        title={props.title || "Modal"}
        description={props.description || "Show Modal"}
        locale={props.locale}
        buttons={props.buttons}
        type={props.type}
        width={props.width}
      />
      <Button label="Show Modal" onClick={() => setIsVisible(true)} />
    </div>
  );
};
