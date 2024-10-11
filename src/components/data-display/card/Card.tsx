import { CardProps } from "@types";
import React from "react";
import { CardBox, CardContentCss, CardCover, CardTitleCss } from "./CardStyle";

export const Card = ({
  cover,
  coverHeight,
  onCoverClick,
  content,
  title,
  style,
  width,
  height,
}: CardProps) => {
  return (
    <CardBox width={width} height={height} style={style}>
      {cover && (
        <CardCover
          height={coverHeight}
          src={cover}
          onClick={() => onCoverClick && onCoverClick()}
        />
      )}
      {title &&
        (typeof title == "string" ? (
          <div css={CardTitleCss}>{title}</div>
        ) : (
          title
        ))}
      {content &&
        (typeof content == "string" ? (
          <div css={CardContentCss}>{content}</div>
        ) : (
          content
        ))}
    </CardBox>
  );
};
