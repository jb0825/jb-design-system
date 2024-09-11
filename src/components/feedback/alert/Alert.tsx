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
   * Alert 타입별 CSS 를 반환
   */
  const getAlertCss = () => {
    switch (type) {
      case "success":
        return SuccessAlertCss;
      case "info":
        return InfoAlertCss;
      case "warning":
        return WarnAlertCss;
      case "error":
        return ErrorAlertCss;
    }
  };

  /**
   * Alert 타입별 아이콘 반환
   */
  const getAlertIcon = () => {
    switch (type) {
      case "success":
        return success;
      case "info":
        return info;
      case "warning":
        return warning;
      case "error":
        return error;
    }
  };

  return (
    <div css={getAlertCss()}>
      <img src={getAlertIcon()} />
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
