import { MenuProps } from "@types";
import React from "react";
import {
  HorizontalBoxCss,
  HorizontalMenuCss,
  HorizontalSubmenuBoxCss,
  MaskIcon,
} from "./MenuStyle";
import { Submenu } from "./Submenu";
import { useTree } from "@hooks";

export const HorizontalMenu = React.memo(({ items }: MenuProps) => {
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
    <div css={HorizontalBoxCss}>
      {items.map((item) => {
        return (
          <div key={item.key}>
            <div
              css={HorizontalMenuCss}
              style={
                item.key == selected || parents.includes(item.key)
                  ? { borderBottom: "2px solid #1976d2", color: "#1976d2" }
                  : {}
              }
              onClick={() => {
                setSelected(item.key);
                item.onClick && item.onClick();
                clearParents();
              }}
            >
              <MaskIcon
                icon={item.icon}
                selected={item.key == selected || parents.includes(item.key)}
              />
              <span>{item.label}</span>
            </div>

            {item.children && (
              <div css={HorizontalSubmenuBoxCss}>
                <div>
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
                    style={{ backgroundColor: "#fff" }}
                    depth={0}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
});
