import { PRIMARY_COLOR } from "@constants/defines";
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
          background-color: ${PRIMARY_COLOR}26;
          color: ${PRIMARY_COLOR};
          `}
      `}
      onClick={() => onButtonClick(page)}
    >
      {page}
    </div>
  );
};
