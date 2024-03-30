import { css } from "@emotion/react";

/** Global Click Animation Style */
export const GlobalCss = css`
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
`;

export const SpanCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
