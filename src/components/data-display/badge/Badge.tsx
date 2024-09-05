import React from "react";
import { BadgeProps } from "@types";
import { BadgeBoxCss, BadgeCss } from "./BadgeStyle";
import { css } from "@emotion/react";

export const Badge = ({
  children,
  isVisible = true,
  max,
  value,
}: BadgeProps) => {
  const getBadgeContent = () => {
    if (max && value && typeof value == "number") return Math.min(value, max);

    return value || "";
  };

  return (
    <div css={BadgeBoxCss}>
      <span
        css={css`
          ${BadgeCss}
          transform:${isVisible ? "scale(1)" : "scale(0)"};
        `}
      >
        {getBadgeContent()}
      </span>
      {children}
    </div>
  );
};
