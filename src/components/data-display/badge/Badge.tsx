import React from "react";
import { BadgeProps } from "@types";
import { BadgeBoxCss, BadgeCss } from "./BadgeStyle";

export const Badge = ({ children, max, value }: BadgeProps) => {
  const getBadgeContent = () => {
    if (max && value && typeof value == "number") return Math.min(value, max);

    return value || "";
  };

  return (
    <div css={BadgeBoxCss}>
      <span css={BadgeCss}>{getBadgeContent()}</span>
      {children}
    </div>
  );
};
