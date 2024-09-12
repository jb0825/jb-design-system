import { close, error, info, success, warning } from "@icons";
import { AlertProps } from "@types";
import React from "react";
import {
  CloseBtnCss,
  ContentCss,
  DescriptionCss,
  ErrorAlertCss,
  InfoAlertCss,
  SuccessAlertCss,
  TitleCss,
  WarnAlertCss,
} from "./AlertStyle";

export const Alert = ({
  type = "success",
  title,
  description,
  disableCloseBtn = true,
  onClose,
}: AlertProps) => {
  /**
   * Alert 타입별 CSS 및 icon
   */
  const alertCss = {
    success: { css: SuccessAlertCss, icon: success },
    info: { css: InfoAlertCss, icon: info },
    warning: { css: WarnAlertCss, icon: warning },
    error: { css: ErrorAlertCss, icon: error },
  };
  const { css, icon } = alertCss[type];

  return (
    <div css={css}>
      <img src={icon} />
      <div css={ContentCss}>
        {title && <div css={TitleCss}>{title}</div>}
        <div css={DescriptionCss}>{description}</div>
      </div>
      {!disableCloseBtn && (
        <img css={CloseBtnCss} src={close} onClick={onClose} />
      )}
    </div>
  );
};
