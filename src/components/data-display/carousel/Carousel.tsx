import { css } from "@emotion/react";
import { CarouselProps } from "@types";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowBox,
  ArrowIcon,
  CarouselBoxCss,
  CarouselCss,
  IndexBar,
  indexBarBoxCss,
} from "./CarouselStyle";

export const Carousel = ({
  autoplay = true,
  children,
  duration = 3000,
  showArrow = true,
  showBar = true,
  onIndexChange,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [index, setIndex] = useState<number>(0);
  // 인터벌 내에서 index 상태값을 사용하기 위한 useRef 변수
  const indexRef = useRef(index);

  /**
   * 인덱스 변경 핸들러
   */
  const onIndexChangeHandler = (idx: number) => {
    onIndexChange && onIndexChange(idx);
    setIndex(idx);
    indexRef.current = idx;
  };

  useEffect(() => {
    // 화면 사이즈 계산
    if (!carouselRef?.current) return;
    const { clientWidth: width, clientHeight: height } = carouselRef.current;
    setSize({ width, height });

    // 슬라이드 autoplay
    if (!autoplay) return;
    const timer = setInterval(
      () => onIndexChangeHandler((indexRef.current + 1) % children.length),
      duration
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div css={CarouselBoxCss} ref={carouselRef}>
      <div
        css={css`
          ${CarouselCss};
          // X 축 움직이기 슬라이드
          transform: translateX(${-(index * size.width)}px);
        `}
      >
        {children.map((item, idx) => (
          <div
            css={css`
              width: ${size.width}px;
              height: ${size.height}px;
              flex-shrink: 0;
              flex-grow: 0;
            `}
            key={idx}
          >
            {item}
          </div>
        ))}
      </div>

      {showArrow && (
        <>
          <ArrowBox
            visible={index > 0}
            onClick={() => onIndexChangeHandler(Math.max(index - 1, 0))}
          >
            <ArrowIcon />
          </ArrowBox>
          <ArrowBox
            position="right"
            visible={index < children.length - 1}
            onClick={() =>
              onIndexChangeHandler(Math.min(index + 1, children.length - 1))
            }
          >
            <ArrowIcon />
          </ArrowBox>
        </>
      )}

      {showBar && (
        <div css={indexBarBoxCss}>
          {children.map((_, idx) => (
            <IndexBar
              key={idx}
              onClick={() => onIndexChangeHandler(idx)}
              selected={index == idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};
