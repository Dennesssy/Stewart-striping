# Contributing to Stewart Striping

Thank you for your interest in contributing to the Stewart Striping website!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Set up Git hooks: `./setup-hooks.sh`
5. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

1. Make your changes
2. Test your changes locally
3. Run linting: `npm run lint` (if available)
4. Run tests: `npm run test` (if available)
5. Commit with a descriptive message
6. Push to your fork
7. Create a Pull Request

## Git Hooks

This project uses Git hooks to maintain code quality:
- **pre-commit**: Runs linting checks
- **pre-push**: Runs tests and build
- **commit-msg**: Validates commit messages

To install hooks: `./setup-hooks.sh`

## Code Style

- Use 2 spaces for indentation
- Follow existing code patterns
- Write clear, descriptive comments when necessary
- Keep functions small and focused
- Use meaningful variable names

## Commit Messages

Write clear, descriptive commit messages:
- Use present tense ("Add feature" not "Added feature")
- Start with a capital letter
- Be specific about what changed
- Reference issues when applicable (e.g., "Fix #123")

### Examples
✅ Good:
- "Add contact form validation"
- "Fix mobile menu navigation issue"
- "Update service descriptions"

❌ Bad:
- "fix"
- "updates"
- "wip"

## Pull Requests

- Keep PRs focused on a single feature/fix
- Include a clear description of changes
- Reference related issues
- Ensure all checks pass
- Update documentation if needed

## Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers/devices
- Check responsive design

## Questions?

If you have questions, please:
- Check existing documentation
- Open an issue for discussion
- Contact the maintainers

## Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

Thank you for contributing! 🎉
