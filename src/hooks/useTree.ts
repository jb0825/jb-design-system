import { Item } from "@types";
import { useCallback, useEffect, useState } from "react";

interface useTreeProps {
  items: Item[];
}

/**
 * Tree 구조의 아이템 선택/확장 기능
 * Menu, Tree 컴포넌트 기능 동작에 사용됨
 *
 * Item { key: string, children: Item[] } 과 같은 타입을 갖는
 * 트리 형태의 아이템 배열에 사용할 수 있음.
 *
 * @see Menu
 * @see Tree
 */
export const useTree = ({ items }: useTreeProps) => {
  const [selected, setSelected] = useState<string>();
  const [expanded, setExpanded] = useState<string[]>([]);
  const [parents, setParents] = useState<string[]>([]);

  /**
   * 확장 아이템 토글
   */
  const toggleExpand = useCallback(
    (key: string) =>
      setExpanded((prev) =>
        prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
      ),
    []
  );

  /**
   * 특정 item 의 모든 부모를 찾는 함수
   * 특정 item 은 key 값으로 구분.
   */
  const findAllParents = useCallback(
    (items: Item[], key: string, parents: string[] = []) => {
      for (const item of items) {
        if (item.key == key) return parents;
        if (item.children) {
          const results: string[] = findAllParents(item.children, key, [
            ...parents,
            item.key,
          ]);
          if (results.length) return results;
        }
      }
      return [];
    },
    []
  );

  /**
   * 선택된 아이템의 모든 부모 초기화
   */
  const clearParents = useCallback(() => setParents([]), []);

  /**
   * 선택된 아이템의 모든 부모 업데이트
   */
  const setAllParents = useCallback(
    (items: Item[], key: string) => setParents(findAllParents(items, key)),
    []
  );

  /**
   * 초기에 모든 트리를 확장 상태로 표출하기 위해
   * children 을 가지고 있는 모든 item 의 key 들을 반환하는 함수
   */
  const getAllParentKeys = useCallback((items: Item[]) => {
    let keys: string[] = [];

    items.forEach((item) => {
      if (item.children && item.children.length) {
        keys.push(item.key);
        keys = keys.concat(getAllParentKeys(item.children));
      }
    });

    return keys;
  }, []);

  /**
   * 모든 아이템 확장
   */
  useEffect(() => {
    if (!items.length) return;
    setExpanded(getAllParentKeys(items));
  }, [items]);

  return {
    /**
     * 현재 선택된 아이템 key
     */
    selected,
    setSelected,
    /**
     * 확장된 아이템 keys
     */
    expanded,
    /**
     * 확장 아이템 토글
     */
    toggleExpand,
    /**
     * 선택된 아이템의 모든 부모 key
     */
    parents,
    /**
     * 선택된 아이템의 모든 부모 초기화
     */
    clearParents,
    /**
     * 선택된 아이템의 모든 부모 업데이트
     */
    setAllParents,
  };
};
