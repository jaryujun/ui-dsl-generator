import { parseDSL } from "./parser";
import { validateDSL } from "./validator";
import { generateVueSFC } from "./mapper";
import * as fs from "fs";
import * as path from "path";

const DEMO_PROMPT = "创建一个商品详情页，顶部是轮播图，中间是商品标题和价格，底部是购买按钮。";

function loadDSLFromFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

function runDemo(): void {
  console.log("=".repeat(60));
  console.log("ui-dsl-generator Demo");
  console.log("=".repeat(60));
  console.log();
  console.log("📝 Input (Natural Language):");
  console.log(DEMO_PROMPT);
  console.log();

  // Load DSL example as the AI-generated output
  const dslPath = path.join(__dirname, "../dsl-examples/product-page.json");
  console.log("🔧 DSL (generated from prompt):");
  const dslRaw = loadDSLFromFile(dslPath);
  console.log(dslRaw);
  console.log();

  // Parse DSL
  const nodes = parseDSL(dslRaw);
  console.log("✅ DSL parsed successfully");
  console.log();

  // Validate DSL
  const errors = validateDSL(nodes);
  if (errors.length > 0) {
    console.error("❌ Validation errors:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log("✅ DSL validation passed");
  console.log();

  // Generate Vue SFC
  const dsl = JSON.parse(dslRaw);
  const pageName = dsl.page.name || "GeneratedPage";
  const vueOutput = generateVueSFC(pageName, nodes);

  console.log("🎨 Generated Vue SFC (TDesign):");
  console.log("-".repeat(60));
  console.log(vueOutput);
  console.log("-".repeat(60));
  console.log();
  console.log("🎉 Demo completed successfully!");
}

// Run
runDemo();
