import { MenuProps } from "@types";
import React from "react";
import { VerticalMenu } from "./VerticalMenu";
import { HorizontalMenu } from "./HorizontalMenu";

export const Menu = React.memo(
  ({ direction = "vertical", items }: MenuProps) => {
    return (
      <nav style={{ width: "100%", height: "100%" }}>
        {direction == "vertical" ? (
          <VerticalMenu items={items} />
        ) : (
          <HorizontalMenu items={items} />
        )}
      </nav>
    );
  }
);
