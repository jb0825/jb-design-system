import { css } from "@emotion/react";
import { arrow } from "@icons";
import React from "react";

export const ArrowIcon = React.memo(({ isExpand }: { isExpand: boolean }) => (
  <img
    src={arrow}
    css={css`
      width: 30px;
      ${isExpand && "transform: rotate(180deg);"}
    `}
  />
));
