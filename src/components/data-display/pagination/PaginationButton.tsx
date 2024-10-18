import { css } from "@emotion/react";
import React from "react";
import { NumberButtonCss } from "./PaginationStyle";

interface PaginationButtonProps {
  active: boolean;
  page: number;
  onButtonClick: (page: number) => void;
}
export const PaginationButton = ({
  active,
  page,
  onButtonClick,
}: PaginationButtonProps) => {
  return (
    <div
      css={css`
        ${NumberButtonCss}
        ${active &&
        `
          background-color: var(--primary-color-15);
          color: var(--primary-color);
          `}
      `}
      onClick={() => onButtonClick(page)}
    >
      {page}
    </div>
  );
};
