import React from "react";
import {
  LinePercentBoxCss,
  LinePercentIconCss,
  LineProgressBarCss,
  LineProgressCss,
  ProgressLoadingCss,
} from "./ProgressStyle";

export interface LineProgressProps {
  value: number;
  status: "default" | "active" | "exception" | "complete";
  showStatus: boolean;
  color: string;
  icon: string;
}

export const LineProgress = React.memo(
  ({ value, showStatus, status, color, icon }: LineProgressProps) => {
    return (
      <React.Fragment>
        <div css={LineProgressBarCss}>
          <div
            css={LineProgressCss}
            style={{ width: `${value}%`, backgroundColor: color }}
          >
            {status == "active" && <div css={ProgressLoadingCss} />}
          </div>
        </div>
        {showStatus && (
          <div css={LinePercentBoxCss}>
            {status == "default" || status == "active"
              ? `${value}%`
              : icon && (
                  <img
                    css={LinePercentIconCss}
                    src={icon}
                    style={{ backgroundColor: color }}
                  />
                )}
          </div>
        )}
      </React.Fragment>
    );
  }
);
