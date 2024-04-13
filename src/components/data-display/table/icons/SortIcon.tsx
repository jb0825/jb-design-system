import { PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";
import React from "react";

export const SortIcon = ({
  sort,
  onClick,
}: {
  sort?: "asc" | "desc" | false;
  onClick: (e: any) => void;
}) => {
  const defaultColor = "#C9C9C9";
  const selectColor = PRIMARY_COLOR;

  return (
    <span
      css={css`
        cursor: pointer;
      `}
      onClick={onClick}
    >
      <svg
        width="10"
        height="11"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 0L7.4641 3.75H0.535898L4 0Z"
          fill={sort === "asc" ? selectColor : defaultColor}
        />
        <path
          d="M4 9L0.535898 5.25L7.4641 5.25L4 9Z"
          fill={sort === "desc" ? selectColor : defaultColor}
        />
      </svg>
    </span>
  );
};
