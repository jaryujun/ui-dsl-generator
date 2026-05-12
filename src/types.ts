export interface DSLProps {
  [key: string]: string | number | boolean | object | DSLProps[];
}

export interface DSLNode {
  type: string;
  props: DSLProps;
  children?: DSLNode[];
}

export interface DSLPage {
  page: {
    name: string;
    dsl_version: string;
    layout: string;
    children: DSLNode[];
  };
}

export interface ComponentMapping {
  dsl_type: string;
  component: string;
  inner_tag?: string;
  child_component?: string;
  is_container?: boolean;
  props_mapping: Record<string, string>;
}
