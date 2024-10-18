export interface Item {
  /**
   * 아이템 고유 키값
   */
  key: string;
  /**
   * 해당 아이템의 자식 요소
   */
  children?: Item[];
}
