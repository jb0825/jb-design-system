import React, { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { AccordionBoxCss } from "./AccordionStyle";
import { AccordionProps, AccordionItem as Item } from "@types";

export const Accordion = (props: AccordionProps) => {
  const [items, setItems] = useState<Item[]>(props.items);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  return (
    <div css={AccordionBoxCss}>
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          children={item.children}
          expended={item.expended || false}
          label={item.label}
        />
      ))}
    </div>
  );
};

Accordion.defaultProps = {};
