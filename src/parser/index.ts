import { DSLNode } from "../types";

export function parseDSL(input: string): DSLNode[] {
  try {
    const parsed = JSON.parse(input);
    if (!parsed.page || !Array.isArray(parsed.page.children)) {
      throw new Error("Invalid DSL: missing page.children");
    }
    return parsed.page.children;
  } catch (e: any) {
    throw new Error(`DSL parse error: ${e.message}`);
  }
}
