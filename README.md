# ui-dsl-generator

> AI-powered DSL-driven UI page generator for uni-app. Converts natural language into structured frontend pages with strict DSL constraints and component mapping.

## Overview

ui-dsl-generator is an open-source system that bridges natural language and uni-app frontend development. Instead of letting AI generate arbitrary code, it uses a **strict DSL (Domain Specific Language)** to ensure every output is consistent, valid, and production-ready.

## How It Works

```
Natural Language
       ↓
  AI → DSL (structured JSON)
       ↓
  DSL Validator (constraint checker)
       ↓
  Component Mapper → uni-app Vue Pages
```

## Quick Start

### 1. Input (Natural Language)

```
创建一个商品详情页，顶部是轮播图，中间是商品标题和价格，底部是购买按钮。
```

### 2. Output (DSL)

See [dsl-examples/product-page.json](dsl-examples/product-page.json) for a full example.

### 3. Component Map

The system maps DSL nodes to uni-app components via a declarative config:

See [component-map.json](component-map.json)

## Project Structure

```
ui-dsl-generator/
├── README.md
├── component-map.json    # DSL node → uni-app component mapping
├── dsl-examples/         # Sample DSL outputs
│   └── product-page.json
└── .gitignore
```

## Why DSL Instead of Direct Code Generation?

| Aspect       | Direct AI Code Gen     | DSL-Driven Generation     |
| ------------ | ---------------------- | ------------------------- |
| Consistency  | Unpredictable          | Strictly enforced         |
| Validation   | Post-generation lint   | Pre-generation constraint |
| Maintenance  | Hard to trace          | Declarative & debuggable  |
| Extensibility| Rewrite prompts        | Extend component-map.json |

## Roadmap

- [ ] DSL parser & validator (TypeScript)
- [ ] CLI tool (`npx ui-dsl-generator`)
- [ ] Component mapper engine
- [ ] uni-app page renderer
- [ ] Visual DSL editor

## License

MIT
