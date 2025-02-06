# Contributing

Thank you for your interest in contributing to num2fa! We welcome contributions from the community to help make this package better.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/num2fa.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Process

1. Make your changes in your feature branch
2. Write or update tests as needed
3. Ensure all tests pass: `npm test`
4. Update documentation if necessary
5. Format your code: `npm run format`
6. Run linting: `npm run lint`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass and the code is properly formatted
3. Submit a pull request to the `main` branch
4. Your PR will be reviewed by maintainers

## Testing

- Write tests for any new functionality
- Run tests with `npm test`
- Aim for 100% test coverage for new code
- Test both success and error cases

## Code Style

We use TypeScript and follow these conventions:

- Use TypeScript's strict mode
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

## Commit Messages

Follow conventional commits format:

- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

Example: `feat: add support for thousands separator`

## Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Format code
npm run format

# Lint code
npm run lint

# Build the package
npm run build
```

## Project Structure

```
num2fa/
├── src/
│   ├── converters/    # Converter implementations
│   ├── constants.ts   # Constant values and mappings
│   └── index.ts       # Public API exports
├── tests/            # Test files
├── dist/            # Compiled output
└── package.json     # Package configuration
```

## Adding New Features

1. Discuss major changes in an issue first
2. Follow existing patterns and conventions
3. Add tests for new functionality
4. Update documentation
5. Add examples if appropriate

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Version information
- Code examples if applicable

## Questions?

If you have questions about contributing, feel free to:

1. Open an issue
2. Ask in your pull request
3. Contact the maintainers

Thank you for contributing to num2fa! 