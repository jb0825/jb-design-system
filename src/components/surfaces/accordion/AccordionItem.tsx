import { css } from "@emotion/react";
import { arrow } from "@icons";
import React, { useEffect, useState } from "react";
import {
  AccordionContentCss,
  AccordionCss,
  AccordionLabelCss,
  LabelImg,
} from "./AccordionStyle";
import { ClickAnimation } from "@components/utils";

interface AccordionItemProps {
  children: string | JSX.Element;
  expended: boolean;
  label: string;
}

export const AccordionItem = ({
  children,
  expended,
  label,
}: AccordionItemProps) => {
  const [itemExpended, setItemExpended] = useState(expended);

  useEffect(() => {
    setItemExpended(expended);
  }, [expended]);

  return (
    <div css={AccordionCss}>
      <div
        css={AccordionLabelCss}
        aria-hidden={!itemExpended}
        onClick={() => setItemExpended(!itemExpended)}
      >
        <ClickAnimation color="#dddddd" size={800} duration={400} />
        <span>{label}</span>
        <LabelImg
          src={arrow}
          css={css`
            ${itemExpended && "transform: rotate(180deg);"}
          `}
        />
      </div>

      <div
        aria-hidden={itemExpended}
        css={css`
          ${AccordionContentCss}
          ${!itemExpended && "max-height: 0vh;"}
        `}
      >
        {children}
      </div>
    </div>
  );
};
