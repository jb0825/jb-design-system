import { BreadcrumbProps } from "@types";
import React from "react";
import { BreadcrumbBoxCss, BreadcrumbCss } from "./BreadcrumbStyle";
import { css } from "@emotion/react";
import { MaskIcon } from "../menu/MenuStyle";

export const Breadcrumb = React.memo(
  ({ items, separator = "/" }: BreadcrumbProps) => {
    const itemSize = items.length - 1;

    return (
      <div css={BreadcrumbBoxCss}>
        {items.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <div
                onClick={() => item.onClick && !item.disabled && item.onClick()}
                css={css`
                  ${BreadcrumbCss}
                  ${idx == itemSize && "color: #2B2B2B;"}
                ${!item.disabled && item.onClick && "cursor: pointer;"}
                &:hover {
                    ${!item.disabled &&
                    `
                    background-color: #F1F1F1;
                    color: #2B2B2B;
                    & > .icon {
                        background-color: #6B6B6B;
                      }`}
                  }
                `}
              >
                {item.icon && (
                  <MaskIcon
                    className="icon"
                    icon={item.icon}
                    selected={idx == itemSize}
                  />
                )}
                {item.title && <div>{item.title}</div>}
              </div>
              {idx < items.length - 1 && <span>{separator}</span>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
