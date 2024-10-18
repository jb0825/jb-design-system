import { css } from "@emotion/react";
import { TreeProps } from "@types";
import React from "react";
import { useMenu } from "@components/navigation/menu/hooks/useMenu";
import { Leaf } from "./Leaf";

export const Tree = React.memo(
  ({ items, icons, onItemClick, width }: TreeProps) => {
    const { selected, setSelected, expanded, toggleExpand } = useMenu({
      items,
    });

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${width && `width: ${width};`}
        `}
      >
        {items.map((item) => (
          <Leaf
            key={item.key}
            icons={icons}
            item={item}
            selected={selected}
            onSelected={setSelected}
            expanded={expanded}
            onExpand={toggleExpand}
            onClick={onItemClick}
          />
        ))}
      </div>
    );
  }
);
