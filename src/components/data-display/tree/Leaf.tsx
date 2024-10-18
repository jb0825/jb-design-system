import { TreeItem } from "@types";
import React from "react";
import { arrow } from "@icons";
import { LeafDiv, Space, SubTreeBoxCss } from "./TreeStyle";

interface LeafProps {
  icons?: {
    collapse: string;
    expand: string;
  };
  item: TreeItem;
  depth?: number;
  selected?: string;
  onSelected: (key: string) => void;
  expanded: string[];
  onExpand: (key: string) => void;
  onClick?: (key: string) => void;
}

export const Leaf = React.memo(
  ({
    icons,
    item,
    depth = 0,
    selected,
    onSelected,
    expanded,
    onExpand,
    onClick,
  }: LeafProps) => {
    const { key, title, children, disabled } = item;
    const isExpanded = expanded.includes(key);

    return (
      <React.Fragment>
        {/** 아이템 리프 노드 */}
        <LeafDiv
          depth={depth}
          disabled={!!disabled}
          selected={key == selected}
          onClick={() => {
            if (disabled) return;

            onSelected(key);
            children && onExpand(key);
            onClick && onClick(key);
          }}
        >
          {children?.length ? (
            icons ? (
              <img src={isExpanded ? icons.collapse : icons.expand} />
            ) : (
              <img
                src={arrow}
                style={isExpanded ? { transform: "rotate(180deg)" } : {}}
              />
            )
          ) : (
            <Space />
          )}
          <span>{title}</span>
        </LeafDiv>
        {/** 자식 요소를 가지고 있으면 서브트리 표출 */}
        {children?.length &&
          children.map((child) => (
            <div
              css={SubTreeBoxCss}
              style={
                isExpanded
                  ? { maxHeight: "1000px", opacity: 1 }
                  : { maxHeight: 0, opacity: 0 }
              }
              key={child.key}
            >
              <Leaf
                icons={icons}
                item={child}
                depth={depth + 1}
                selected={selected}
                onSelected={onSelected}
                expanded={expanded}
                onExpand={onExpand}
                onClick={onClick}
              />
            </div>
          ))}
      </React.Fragment>
    );
  }
);
