import { Global, css } from "@emotion/react";

export default () => {
  return (
    <Global
      styles={css`
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

        .effect-container.active::before {
          border-radius: 50%;
          animation: ripple var(--effect-duration) linear forwards;
        }

        @keyframes ripple {
          from {
            transform: scale(0);
          }

          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}
    />
  );
};
