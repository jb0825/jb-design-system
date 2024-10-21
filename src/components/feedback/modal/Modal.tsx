import { css } from "@emotion/react";
import { close, error, info, success, warning } from "@icons";
import { ModalProps } from "@types";
import React, { useEffect, useState } from "react";
import {
  DimCss,
  ModalBoxCss,
  ModalCloseBtnCss,
  ModalContentCss,
  ModalCss,
  ModalFooterCss,
  ModalHeaderCss,
} from "./ModalStyle";
import { Button } from "@components/inputs";

export const Modal = ({
  buttons,
  description,
  locale = "ko",
  onCancel,
  onClose,
  onOk,
  title,
  type = "default",
  isVisible: isVisibleProp,
  icon,
  width = 400,
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isVisibleProp || false);

  /**
   * 언어에 따른 footer buttons 라벨
   */
  const buttonLabels = {
    ko: { cancel: "취소", ok: "확인" },
    en: { cancel: "Cancel", ok: "OK" },
  };

  /**
   * 타입에 따른 header icon
   */
  const icons = {
    default: undefined,
    confirm: warning,
    success: success,
    info: info,
    error: error,
  };

  /**
   * Close button click handler
   */
  const onCloseClickHandler = () => {
    setIsVisible(false);
    onClose && onClose();
  };

  /**
   * Cancel button click handler
   */
  const onCancelClickHandler = () => {
    onCancel && onCancel();
    onCloseClickHandler();
  };

  /**
   * OK button click handler
   */
  const onOkClickHandler = () => {
    onOk && onOk();
    onCloseClickHandler();
  };

  useEffect(() => {
    setIsVisible(isVisibleProp || false);
  }, [isVisibleProp]);

  return (
    <div
      css={css`
        ${ModalBoxCss}
        display: ${isVisible ? "block" : "none"}
      `}
    >
      <div css={DimCss} />
      <div
        css={css`
          ${ModalCss};
          ${width && `left: calc(50% - ${width / 2}px); width: ${width}px;`}
        `}
      >
        {/** Header */}
        <div css={ModalHeaderCss}>
          {type != "default" && <img src={icon || icons[type]} />}
          <div>{title}</div>
          <div css={ModalCloseBtnCss}>
            <Button type="icon" icon={close} onClick={onCloseClickHandler} />
          </div>
        </div>
        {/** Contents */}
        <div css={ModalContentCss}>{description}</div>
        {/** Footer */}
        <div css={ModalFooterCss}>
          {/** Custom buttons */}
          {buttons?.length ? (
            buttons.map((i, idx) => <div key={idx}>{i}</div>)
          ) : (
            <>
              {/** Default buttons */}
              {type == "confirm" && (
                <Button
                  label={buttonLabels[locale].cancel}
                  onClick={onCancelClickHandler}
                />
              )}
              <Button
                type="primary"
                label={buttonLabels[locale].ok}
                onClick={onOkClickHandler}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
