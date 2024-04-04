import { useClickAnimation } from "@hooks";
import React, { useRef } from "react";
import { AnimationConfig } from "@types";
import { css } from "@emotion/react";

interface ClickAnimationProps extends AnimationConfig {
  children?: JSX.Element;
  disabled?: boolean;
}

/**
 * Click Animation Component
 * @param config
 * @returns
 */
export const ClickAnimation = ({
  children,
  disabled,
  ...config
}: ClickAnimationProps) => {
  const spanRef = useRef<HTMLDivElement>(null);

  useClickAnimation(spanRef, config);

  return (
    <div
      ref={spanRef}
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};
