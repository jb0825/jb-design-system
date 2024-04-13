import { Header } from "@tanstack/react-table";
import { ResizerBoxCss, ResizerCss } from "./TableStyle";
import React from "react";

/**
 * React-table column resizing
 * @param header react-table header
 *
 * 👉 참고 : https://tanstack.com/table/latest/docs/framework/react/examples/column-sizing
 */
export const Resizer = ({ header }: { header: Header<Object, unknown> }) => {
  return (
    <div
      css={ResizerBoxCss}
      onDoubleClick={header.column.resetSize}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
    >
      <div css={ResizerCss}></div>
    </div>
  );
};
