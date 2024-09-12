import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from "./Alert";
import { css } from "@emotion/react";
import { useAlert } from "./useAlert";
import { Button } from "@components/inputs/button/Button";
import { AlertProps } from "@types";

const meta = {
  title: "Design System/Feedback/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = (props: AlertProps) => {
  if (!props.description) props.description = "This is a success Alert.";

  return (
    <div
      css={css`
        width: 350px;
      `}
    >
      <Alert {...props} />
    </div>
  );
};

export const AlertTypes = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 800px;
        div {
          position: relative;
        }
      `}
    >
      <div>
        <Alert
          type="success"
          title="Success"
          description="This is a success Alert."
        />
      </div>
      <div>
        <Alert type="info" title="Info" description="This is a info Alert." />
      </div>
      <div>
        <Alert
          type="warning"
          title="Warning"
          description="This is a warning Alert."
        />
      </div>
      <div>
        <Alert
          type="error"
          title="Error"
          description="This is a error Alert."
        />
      </div>
    </div>
  );
};

export const UsingHooks = () => {
  const { contextHolder, api } = useAlert({ duration: 3000 });

  return (
    <div>
      {contextHolder}
      <br />
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <Button
          label="SUCCESS"
          onClick={() =>
            api.open({
              title: "Success",
              description: "This is a success Alert.",
              disableCloseBtn: false,
            })
          }
        />
        <Button
          label="INFO"
          onClick={() =>
            api.open({
              title: "Info",
              type: "info",
              description: "This is a info Alert.",
              disableCloseBtn: false,
            })
          }
        />
        <Button
          label="WARNING"
          onClick={() =>
            api.open({
              title: "Warning",
              type: "warning",
              description: "This is a warning Alert.",
              disableCloseBtn: false,
            })
          }
        />
        <Button
          label="ERROR"
          onClick={() =>
            api.open({
              title: "Error",
              type: "error",
              description: "This is a error Alert.",
              disableCloseBtn: false,
            })
          }
        />
      </div>
    </div>
  );
};

export const AlertPosition = () => {
  const { contextHolder: topLeftContext, api: topLeftApi } = useAlert({
    position: "topLeft",
  });
  const { contextHolder: topRightContext, api: topRightApi } = useAlert({
    position: "topRight",
  });

  const { contextHolder: bottomLeftContext, api: bottomLeftApi } = useAlert({
    position: "bottomLeft",
  });

  const { contextHolder: bottomRightContext, api: bottomRightApi } = useAlert({
    position: "bottomRight",
  });

  return (
    <div>
      {topLeftContext}
      {topRightContext}
      {bottomLeftContext}
      {bottomRightContext}

      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <Button
          label="topLeft"
          onClick={() =>
            topLeftApi.open({
              title: "TopLeft",
              description: "Position topLeft",
              disableCloseBtn: false,
              type: "info",
            })
          }
        />
        <Button
          label="topRight"
          onClick={() =>
            topRightApi.open({
              title: "TopRight",
              description: "Position topRight",
              disableCloseBtn: false,
              type: "info",
            })
          }
        />
        <Button
          label="bottomLeft"
          onClick={() =>
            bottomLeftApi.open({
              title: "bottomLeft",
              description: "Position bottomLeft",
              disableCloseBtn: false,
              type: "info",
            })
          }
        />
        <Button
          label="bottomRight"
          onClick={() =>
            bottomRightApi.open({
              title: "bottomRight",
              description: "Position bottomRight",
              disableCloseBtn: false,
              type: "info",
            })
          }
        />
      </div>
    </div>
  );
};
