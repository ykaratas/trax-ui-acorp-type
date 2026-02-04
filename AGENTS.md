# Repository Guidelines

## Project Structure & Module Organization
- `dist/` contains the published artifacts: `dist/index.js` (runtime) and `dist/index.d.ts` (TypeScript types).
- `package.json` defines package metadata and entry points (`main` and `types`).
- No `src/`, `test/`, or `assets/` directories are present in this repository.

## Build, Test, and Development Commands
- No `scripts` are defined in `package.json`, so there are no local build/test commands in this repo.
- If you need to validate the output, you can perform a simple runtime check:
  - `node dist/index.js` (only if the bundle is executable without arguments).
- If source or build tooling exists, it likely lives in an upstream or parent repository; follow that project’s instructions.

## Coding Style & Naming Conventions
- This repository only contains compiled output. Avoid manual edits to `dist/` unless you are intentionally patching built artifacts.
- Public API surface is defined by `dist/index.d.ts`; keep export names stable and consistent (e.g., `PascalCase` for types, `camelCase` for functions) when regenerating outputs.
- No linting or formatting configuration is present here.

## Testing Guidelines
- No test framework or tests are included in this repository.
- If tests exist elsewhere, run them in the source repository before updating `dist/`.

## Commit & Pull Request Guidelines
- Git history is not available in this directory, so no commit message convention can be inferred.
- For pull requests, include:
  - A short description of the change and its impact on the exported API.
  - If `dist/` changes, note the source of the build and any verification performed.

## Security & Configuration Tips
- The package is marked `private: true`; do not publish without explicit approval.
- Avoid introducing runtime dependencies unless they are required and documented in `package.json`.
