# Git Hooks

This directory contains Git hooks to help maintain code quality and consistency.

## Available Hooks

### pre-commit
Runs before each commit to:
- Run linting checks (if configured)
- Warn about console.log statements
- Warn about TODO/FIXME comments

### pre-push
Runs before pushing to remote to:
- Run tests (if configured)
- Run build checks (if configured)

### commit-msg
Validates commit messages to:
- Ensure minimum message length (10 characters)
- Warn about generic commit messages

## Installation

To enable these hooks, run:

```bash
git config core.hooksPath .githooks
```

Or copy them to `.git/hooks/`:

```bash
cp .githooks/* .git/hooks/
```

## Bypassing Hooks

If you need to bypass hooks in an emergency:

```bash
# Skip pre-commit hook
git commit --no-verify

# Skip pre-push hook
git push --no-verify
```

**Note:** Use bypass sparingly and only when absolutely necessary.
