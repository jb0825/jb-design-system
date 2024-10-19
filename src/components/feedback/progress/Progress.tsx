import { ProgressProps } from "@types";
import React, { useEffect, useState } from "react";
import { check, close } from "./icons";
import { LineProgress } from "./LineProgress";
import { CircleProgress } from "./CircleProgress";
import { ProgressBoxCss } from "./ProgressStyle";

export const Progress = React.memo(
  ({
    value,
    status: statusProp = "default",
    showStatus = true,
    type = "line",
    width,
  }: ProgressProps) => {
    const [status, setStatus] = useState<
      "default" | "active" | "exception" | "complete"
    >(value >= 100 ? "complete" : statusProp);

    // 프로그래스 색상
    const colors = {
      default: "var(--info-color)",
      active: "var(--info-color)",
      exception: "var(--error-color)",
      complete: "var(--success-color)",
    };
    // 아이콘
    const icons = {
      default: undefined,
      active: undefined,
      exception: close,
      complete: check,
    };
    // LineProgress, CircleProgress properties
    const progressProps = {
      value,
      showStatus,
      status,
      color: colors[status],
      icon: icons[status],
    };

    useEffect(() => {
      setStatus(value >= 100 ? "complete" : statusProp);
    }, [value, statusProp]);

    return (
      <div css={ProgressBoxCss} style={width ? { width } : {}}>
        {type == "circle" ? (
          <CircleProgress {...progressProps} width={width || "100px"} />
        ) : (
          <LineProgress {...progressProps} />
        )}
      </div>
    );
  }
);
