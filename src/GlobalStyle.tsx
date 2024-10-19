import { Global, css } from "@emotion/react";

export default () => {
  return (
    <Global
      styles={css`
        * {
          font-family: "Noto Sans KR", sans-serif;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        :root {
          --primary-color: #1976d2;
          --default-color: #6b6b6b;

          --default-color-light: #dddddd;

          /** 투명도 적용된 컬러 **/
          --primary-color-10: #1976d21a;
          --primary-color-15: #1976d226;
          --primary-color-20: #1976d266;

          --success-color: #52c41a;
          --info-color: #1677ff;
          --warning-color: #faad14;
          --error-color: #ff4d4f;

          --success-color-dark: #245327;
          --info-color-dark: #286281;
          --warning-color-dark: #8d4a12;
          --error-color-dark: #832929;

          --success-color-light: #edf7ed;
          --info-color-light: #e5f6fd;
          --warning-color-light: #fff4e5;
          --error-color-light: #fdeded;
        }

        /** ClickAnimation Styles **/
        .effect-container {
          position: relative;
          overflow: hidden;

          --effect-name: ripple;
          --effect-duration: 500ms;
          --effect-top: 0;
          --effect-left: 0;
          --effect-height: 100px;
          --effect-width: 100px;
          --effect-color: "fff";
        }

        .effect-container::before {
          content: "";
          position: absolute;
          opacity: 0.3;
          top: var(--effect-top);
          left: var(--effect-left);
          height: var(--effect-height);
          width: var(--effect-width);
          background: var(--effect-color);
        }

        .effect-container[aria-disabled="true"]::before {
          display: none;
        }

        .effect-container.active::before {
          border-radius: 50%;
          animation: ripple var(--effect-duration) linear forwards;
        }

        /** Animations **/

        // ClickAnimation
        @keyframes ripple {
          from {
            transform: scale(0);
          }

          to {
            transform: scale(1);
            opacity: 0;
          }
        }

        // Progress & Skeleton
        @keyframes translateX {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
    />
  );
};
