import { AlertProps } from "@types";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert } from "./Alert";
import { css } from "@emotion/react";

interface useAlertProps {
  width?: number /** pixel */;
}

export const useAlert = ({ width = 350 }: useAlertProps = {}) => {
  const [children, setChildren] = useState<JSX.Element[]>([]);
  const [alert, setAlert] = useState<JSX.Element[]>([]);

  const divRef = useRef<HTMLDivElement>(null);

  const overlapCss = css`
    position: absolute;
    height: 80px;
    background-color: #f4f4f4;
    box-shadow: 0px 0px 12px 2px #60606075;
    border-radius: 6px;
    opacity: 80%;
  `;

  /**
   * Alert 가 표출될 엘리먼트
   */
  const contextHolder = useMemo(
    () => (
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0px;
        `}
        ref={divRef}
      >
        <div
          css={css`
            width: ${width}px;
            display: flex;
            flex-direction: column;
            padding: 10px;
            gap: 10px;
            overflow: hidden;
          `}
        >
          {children}
        </div>
      </div>
    ),
    [children]
  );

  /**
   * Alert 가 4개 이상 생성되었을 때, 겹쳐져서 보이도록 해당 엘리먼트로 대체
   */
  const overlapped = useMemo(
    () => (
      <div
        css={css`
          position: relative;
          width: ${width}px;
          height: 100px;
        `}
        key="overlapped"
      >
        <div
          css={css`
            ${overlapCss};
            width: ${width - 40}px;
            top: 20px;
            left: 20px;
          `}
        />
        <div
          css={css`
            ${overlapCss};
            width: ${width - 20}px;
            top: 10px;
            left: 10px;
          `}
        />
        <div
          css={css`
            position: relative;
          `}
        >
          {alert?.at(alert.length - 1)}
        </div>
      </div>
    ),
    [alert.length]
  );

  /**
   * 4개 이상일 때부터 겹쳐진 모습으로 보여짐
   */
  useEffect(() => {
    if (alert.length >= 4) {
      setChildren([overlapped]);
      return;
    }
    setChildren(alert);
  }, [alert.length]);

  /**
   * Alert 생성
   */
  const open = ({
    type = "success",
    title,
    description,
    disableCloseBtn = true,
    onClose,
  }: AlertProps) => {
    if (!divRef.current) return;
    const key = Math.random() + "";

    setAlert((prev) => [
      ...prev,
      <Alert
        key={key}
        type={type}
        title={title}
        description={description}
        disableCloseBtn={disableCloseBtn}
        onClose={() => {
          if (onClose) onClose();
          /**
           * Alert 닫기
           */
          setAlert((prev) => prev.filter((i) => i.key !== key));
        }}
      />,
    ]);
  };

  return {
    contextHolder,
    api: {
      open,
    },
  };
};
