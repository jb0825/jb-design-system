import { AnimationConfig } from "@types";
import { useEffect } from "react";

/**
 * Element 클릭 시 애니메이션 적용
 * @param element 애니메이션 적용할 element. (useRef RefObject)
 * @param config 애니메이션 설정
 *
 * 👉 참고 : https://www.letsbuildui.dev/articles/adding-click-animations-to-anything/
 */
export const useClickAnimation = (
  element: React.RefObject<any>,
  config: AnimationConfig
) => {
  const {
    size = 100,
    duration = 800,
    color = "#ffffff",
    isPositionFixed = false,
  } = config;

  /**
   * Animation style setting
   * @param e
   */
  const applyStyles = (e: any) => {
    const { style } = element.current;
    const { offsetX, offsetY } = e;
    const sizeOffset = size / 2;
    const top = isPositionFixed ? "0" : `${offsetY - sizeOffset}px`;
    const left = isPositionFixed ? "0" : `${offsetX - sizeOffset}px`;

    style.setProperty("--effect-duration", `${duration}ms`);
    style.setProperty("--effect-top", top);
    style.setProperty("--effect-left", left);
    style.setProperty("--effect-height", `${size}px`);
    style.setProperty("--effect-width", `${size}px`);
    style.setProperty("--effect-color", color);
  };

  /**
   * Element click event handler
   * @param e
   */
  const onClickHandler = (e: any) => {
    element.current.classList.remove("active");
    applyStyles(e);
    element.current.classList.add("active");
  };

  useEffect(() => {
    if (!element.current) return;

    element.current.classList.add("effect-container");
    element.current.addEventListener("mouseup", onClickHandler);

    // Needed for referencing the ref in the return function
    const cleanupRef = element.current;

    return () => {
      cleanupRef.removeEventListener("mouseup", onClickHandler);
    };
  }, [element, config]);
};
