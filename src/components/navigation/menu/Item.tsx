import { css } from "@emotion/react";
import { MenuItem } from "@types";
import React from "react";
import { ItemCss, MaskIcon } from "./MenuStyle";
import { ArrowIcon } from "./icons";

interface ItemProps {
  item: MenuItem;
  onSelected: (key: string) => void;
  selected?: string;
  expanded: string[];
  isParent?: boolean;
  depth?: number;
}

export const Item = React.memo(
  ({
    item,
    expanded,
    selected,
    isParent = false,
    onSelected,
    depth,
  }: ItemProps) => {
    // 메뉴 확장 여부
    const isExpanded = expanded.includes(item.key);
    // 메뉴 선택 여부
    const isSelected = selected == item.key;

    return (
      <div
        css={css`
          ${ItemCss}
          &:hover {
            ${!isSelected && "background-color: #e8e8e8;"}
          }
          ${isSelected && "color: #1976d2; background-color: #e6f4ff"};
          // 현재 아이템이 선택된 메뉴의 부모 아이템이면 컬러 적용
          ${isParent && "color: #1976d2;"}
        `}
        onClick={() => {
          onSelected(item.key);
          item.onClick && item.onClick();
        }}
      >
        {/** 자식 아이템인 경우 depth 에 따라 1rem 씩 들여쓰기 */}
        {typeof depth == "number" && (
          <div
            css={css`
              width: ${depth}rem;
              flex-shrink: 0;
            `}
          />
        )}
        {item.icon && (
          <MaskIcon selected={isSelected || isParent} icon={item.icon} />
        )}
        <span>{item.label}</span>
        {item.children && <ArrowIcon isExpand={isExpanded} />}
      </div>
    );
  }
);
