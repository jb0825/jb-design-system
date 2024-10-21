import { SkeletonProps } from "@types";
import { MaskIcon, SkeletonBox, SkeletonLoadingCss } from "./SkeletonStyle";
import React from "react";

export const Skeleton = ({
  width,
  height = "20px",
  enableAnimation = true,
  icon,
  style,
}: SkeletonProps) => {
  return (
    <SkeletonBox width={width} height={height} style={style}>
      {icon && <MaskIcon icon={icon} />}
      {enableAnimation && <div css={SkeletonLoadingCss} />}
    </SkeletonBox>
  );
};
