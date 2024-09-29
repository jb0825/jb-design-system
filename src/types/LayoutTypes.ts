import { CSSProperties } from "react";

/**
 * Layout component properties
 */
export interface LayoutProps {
  /**
   * Children element
   */
  children?: React.ReactNode | JSX.Element;
  /**
   * Layout CSS style object
   */
  style?: CSSProperties;
}
