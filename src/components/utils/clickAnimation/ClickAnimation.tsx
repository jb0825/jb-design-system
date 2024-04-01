import { useClickAnimation } from "@hooks";
import React, { useRef } from "react";
import { SpanCss } from "./ClickAnimationCss";
import { AnimationConfig } from "@types";

/**
 * Click Animation Component
 * @param config
 * @returns
 */
export const ClickAnimation = (config: AnimationConfig) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useClickAnimation(spanRef, config);

  return <span ref={spanRef} css={SpanCss} />;
};
