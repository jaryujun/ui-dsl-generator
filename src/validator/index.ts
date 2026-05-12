import { DSLNode } from "../types";
import componentMap from "../../component-map.json";

const validTypes = new Set(componentMap.mappings.map((m) => m.dsl_type));

export function validateDSL(nodes: DSLNode[]): string[] {
  const errors: string[] = [];
  for (const node of nodes) {
    if (!validTypes.has(node.type)) {
      errors.push(`Unknown DSL type: "${node.type}"`);
    }
    if (node.children) {
      errors.push(...validateDSL(node.children));
    }
  }
  return errors;
}
