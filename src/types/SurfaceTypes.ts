/**
 * Accordion 컴포넌트 items 옵션 타입
 */
export interface AccordionItem {
  /**
   * 아이템 키값
   */
  key: string;
  /**
   * 헤더에 표출될 텍스트
   */
  label: string;
  /**
   * 펼쳐졌을 때 표출될 아이템 내용
   */
  children: string | JSX.Element;
  /**
   * 펼침 여부
   * default: false
   */
  expended?: boolean;
}

/**
 * Accordion component properties
 */
export interface AccordionProps {
  items: AccordionItem[];
}
