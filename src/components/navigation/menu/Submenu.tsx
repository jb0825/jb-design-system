import { css } from "@emotion/react";
import { MenuItem } from "@types";
import React, { CSSProperties } from "react";
import { Item } from "./Item";
import { SubMenuBoxCss } from "./MenuStyle";

interface SubmenuProps {
  item: MenuItem;
  onSelected: (key: string) => void;
  onExpand: (key: string) => void;
  selected?: string;
  expanded: string[];
  depth?: number;
  parents: string[];
  style?: CSSProperties;
}

export const Submenu = React.memo(
  ({
    item,
    expanded,
    selected,
    onSelected,
    onExpand,
    depth = 1,
    parents,
    style,
  }: SubmenuProps) => {
    if (!item.children) return null;
    // 메뉴 확장 여부
    const isExpanded = expanded.includes(item.key);

    return (
      <ul
        css={css`
          ${SubMenuBoxCss}
          max-height: ${isExpanded ? "1000px" : "0"};
          opacity: ${isExpanded ? "1" : "0"};
        `}
        style={style}
      >
        {item.children.map((child) => {
          const props = {
            item: child,
            expanded,
            selected,
            onSelected,
            depth,
          };

          return (
            <React.Fragment key={child.key}>
              <li
                css={css`
                  margin: 4px;
                  ${item.children &&
                  "&:not(:last-of-type) { margin-bottom: 0px; }"}
                `}
                onClick={() => {
                  if (!child.children) return;
                  onExpand(child.key);
                }}
              >
                <Item {...props} isParent={parents.includes(child.key)} />
              </li>
              {child.children && (
                <Submenu
                  {...props}
                  onExpand={onExpand}
                  depth={depth + 1}
                  parents={parents}
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
);
