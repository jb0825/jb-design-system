import React from "react";
import { css } from "@emotion/react";
import { LineProgressProps } from "./LineProgress";
import { CircleMaskIcon } from "./ProgressStyle";

interface CircleProgressProps extends LineProgressProps {
  width: string;
}

/**
 * @todo status "active" 일 때 LineProgress 처럼 그라디언트로 돌아가는 애니메이션 효과 주기
 */
export const CircleProgress = React.memo(
  ({ value, showStatus, status, color, icon, width }: CircleProgressProps) => {
    // width 값 number value
    const size = parseInt(width);
    // circle stroke width
    const strokeSize = Math.max(6, (size / 100) * 6);
    // stroke size 를 제외한 반지름 값
    const radius = size / 2 - strokeSize;
    // 원의 둘레
    const circumference = Math.PI * radius * 2;

    /**
     * 프로그래스 진행 퍼센트에 따른 원의 둘레 계산 함수
     * @param circumference 원의 둘레
     * @param percent 퍼센트
     */
    const getCircumferenceByPercentage = (
      circumference: number,
      percent: number
    ) => {
      // stroke-dashoffset 이 원의 둘레와 같을 때 0% 로 그려지며,
      // 0 일 때 100% 채워진 원임.
      // 공식과 반대로 계산해야 되기 때문에 (100 - percent) 해줘야 함
      // 퍼센트가 마이너스면 원이 역방향으로 그려지기 때문에 최솟값 0 으로 막음
      return (circumference * (100 - Math.max(percent, 0))) / 100;
    };

    return (
      <div
        css={css`
          position: relative;
          width: ${width};
          height: ${width};
        `}
      >
        <svg viewBox={`0 0 ${size} ${size}`}>
          {/** track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--default-color-light)"
            css={css`
              fill-opacity: 0;
              stroke-width: ${strokeSize};
            `}
          />
          {/** progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            css={css`
              fill-opacity: 0;
              stroke-width: ${strokeSize};
              stroke-dasharray: ${circumference};
              stroke-dashoffset: ${getCircumferenceByPercentage(
                circumference,
                value
              )};
              stroke-linecap: round;
              transform: rotate(-90deg);
              transform-origin: ${size / 2}px ${size / 2}px;
            `}
          />
        </svg>
        {showStatus && (status == "default" || status == "active") ? (
          <div
            css={css`
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              font-size: ${size / 100}rem;
            `}
          >
            {value}%
          </div>
        ) : (
          <CircleMaskIcon
            icon={icon}
            color={`var(--${status == "complete" ? "success" : "error"}-color)`}
          />
        )}
      </div>
    );
  }
);
