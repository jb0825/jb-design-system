import { LayoutProps } from "@types";
import React, { useEffect, useRef, useState } from "react";
import { ContentCss, HeaderCss, LayoutDiv, SiderCss } from "./LayoutStyles";

export const Header = ({ style, children }: LayoutProps) => {
  return (
    <header className="header" css={HeaderCss} style={style}>
      {children}
    </header>
  );
};

export const Footer = ({ style, children }: LayoutProps) => {
  return (
    <footer className="footer" css={HeaderCss} style={style}>
      {children}
    </footer>
  );
};

export const Content = ({ style, children }: LayoutProps) => {
  return (
    <main className="content" css={ContentCss} style={style}>
      {children}
    </main>
  );
};

export const Sider = ({ style, children }: LayoutProps) => {
  return (
    <div className="sider" css={SiderCss} style={style}>
      {children}
    </div>
  );
};

export const Layout = ({ style, children }: LayoutProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [hasSider, setHasSider] = useState(false);

  /**
   * Sider 를 가지고 있는 Layout 은 flex-direction: row 로 표출
   */
  useEffect(() => {
    if (!layoutRef.current?.children?.length) return;
    if (layoutRef.current.querySelector("& > .sider")) setHasSider(true);
  }, []);

  return (
    <LayoutDiv ref={layoutRef} style={style} hasSider={hasSider}>
      {children}
    </LayoutDiv>
  );
};
