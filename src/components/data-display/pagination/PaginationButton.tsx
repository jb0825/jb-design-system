import { PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";
import React from "react";

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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border-radius: 50%;
        font-size: 14px;
        user-select: none;
        &:hover {
          background-color: #f1f1f1;
        }
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
