# Repository Guidelines

## Project Structure

```
ui-dsl-generator/
├── src/                  # TypeScript source code (parser, validator, generator)
├── tests/                # Unit and integration tests
├── dsl-examples/         # Sample DSL JSON files
├── component-map.json    # DSL node → uni-app component mapping
├── package.json          # Project metadata and scripts
└── README.md             # Project overview
```

All source lives under `src/`, organized by module: `parser/`, `validator/`, `mapper/`, `generator/`.

## Build, Test, and Development Commands

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm install`       | Install dependencies                 |
| `npm run build`     | Compile TypeScript to `dist/`        |
| `npm test`          | Run unit tests via Vitest            |
| `npm run lint`      | Lint with ESLint + Prettier          |
| `npm run dev`       | Watch mode for local development     |

## Coding Style & Naming Conventions

- **Indentation**: 2 spaces, no tabs.
- **TypeScript**: Strict mode enabled. Prefer explicit return types on exported functions.
- **Naming**: `camelCase` for variables/functions, `PascalCase` for classes/types, `kebab-case` for files.
- **DSL keys**: `snake_case` for DSL JSON property names to stay consistent with `component-map.json`.
- **Linting**: ESLint + Prettier — run `npm run lint` before committing.

## Testing Guidelines

- Framework: **Vitest**
- Place tests alongside source as `*.test.ts` in `tests/`.
- Naming: `describe("ModuleName")` → `it("should <behavior> when <condition>")`.
- Aim for coverage of the parser, validator, and mapper modules first.
- Run: `npm test` (all), `npm test -- -t "ModuleName"` (filter).

## Commit & Pull Request Guidelines

- **Commits**: Follow Conventional Commits — `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
- Keep commits focused: one logical change per commit.
- **Pull Requests**:
  - Include a clear description of what changed and why.
  - Link related issues with `Closes #N`.
  - Add test coverage for new logic.
  - For CLI or generator changes, include a sample input/output.
