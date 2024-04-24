export interface AccordionItem {
  key: string;
  label: string;
  children: string | JSX.Element;
  expended?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
}
