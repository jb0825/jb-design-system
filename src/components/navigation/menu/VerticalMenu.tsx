import { css } from "@emotion/react";
import { MenuProps } from "@types";
import React from "react";
import { Item } from "./Item";
import { Submenu } from "./Submenu";
import { VerticalBoxCss, VerticalMenuCss } from "./MenuStyle";
import { useTree } from "@hooks";

export const VerticalMenu = React.memo(({ items }: MenuProps) => {
  const {
    selected,
    setSelected,
    expanded,
    toggleExpand,
    parents,
    clearParents,
    setAllParents,
  } = useTree({ items });

  return (
    <ul css={VerticalBoxCss}>
      {items.map((item) => {
        return (
          <React.Fragment key={item.key}>
            <li
              css={css`
                ${VerticalMenuCss}
                ${item.children &&
                !expanded.includes(item.key) &&
                "&:not(:last-of-type) { margin-bottom: 0px; }"}
              `}
              onClick={() => {
                clearParents();
                if (!item.children) return;
                toggleExpand(item.key);
              }}
            >
              <Item
                item={item}
                onSelected={setSelected}
                selected={selected}
                expanded={expanded}
                isParent={parents.includes(item.key)}
              />
            </li>
            {item.children && (
              <Submenu
                item={item}
                onSelected={(key) => {
                  setSelected(key);
                  setAllParents(items, key);
                }}
                onExpand={toggleExpand}
                selected={selected}
                expanded={expanded}
                parents={parents}
              />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
});
