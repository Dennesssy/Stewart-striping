# Project Settings

This document outlines all configuration and settings for the Stewart Striping project.

## Project Structure

```
Stewart-striping/
├── .githooks/              # Git hooks for code quality
│   ├── pre-commit         # Runs before commits
│   ├── pre-push           # Runs before pushes
│   └── commit-msg         # Validates commit messages
├── public/                # Static assets (to be created)
├── src/                   # Source code (to be created)
├── .editorconfig          # Editor configuration
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── vercel.json            # Vercel deployment config
├── ANALYTICS.md           # Analytics documentation
├── CONTRIBUTING.md        # Contribution guidelines
├── README.md              # Project documentation
└── setup-hooks.sh         # Hook installation script
```

## Configuration Files

### .gitignore
Excludes unnecessary files from version control:
- Node modules
- Environment files
- Build artifacts
- IDE configurations
- OS-specific files

### vercel.json
Configures Vercel deployment:
- Build and dev commands
- Security headers
- URL rewrites
- Analytics integration
- Deployment regions

### .editorconfig
Maintains consistent coding style:
- 2-space indentation
- UTF-8 encoding
- LF line endings
- Trim trailing whitespace

### .env.example
Template for environment variables:
- Analytics IDs
- API keys
- Email configuration
- Site metadata

## Git Hooks

### Installation
Run `./setup-hooks.sh` to install hooks.

### Available Hooks
- **pre-commit**: Linting and code checks
- **pre-push**: Tests and build verification
- **commit-msg**: Commit message validation

### Bypassing Hooks
Use `--no-verify` flag when necessary (sparingly):
```bash
git commit --no-verify
git push --no-verify
```

## Vercel Configuration

### Deployment Settings
- **Framework**: Auto-detected or manual
- **Build Command**: `npm run build`
- **Output Directory**: `public` or framework default
- **Install Command**: `npm install`

### Environment Variables
Set in Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add required variables from `.env.example`

### Analytics
Enabled via `vercel.json`:
```json
"analytics": {
  "enable": true
}
```

### Security Headers
Configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## Development Settings

### Recommended IDE Extensions
- EditorConfig
- ESLint
- Prettier
- GitLens

### Code Style
- 2-space indentation
- UTF-8 encoding
- LF line endings
- Trailing newline
- No trailing whitespace

## Deployment Workflow

1. **Development**
   - Work on feature branch
   - Test locally
   - Commit with descriptive messages

2. **Pre-deployment**
   - Git hooks run automatically
   - Linting checks pass
   - Tests pass
   - Build succeeds

3. **Deployment**
   - Push to GitHub
   - Vercel auto-deploys
   - Preview deployments for PRs
   - Production deployment from main

4. **Post-deployment**
   - Check analytics
   - Verify functionality
   - Monitor performance

## Troubleshooting

### Git Hooks Not Running
```bash
# Reinstall hooks
./setup-hooks.sh
# Or manually
git config core.hooksPath .githooks
```

### Deployment Failures
1. Check Vercel deployment logs
2. Verify environment variables
3. Test build locally: `npm run build`
4. Check `vercel.json` syntax

### Analytics Not Showing
1. Wait 24-48 hours for initial data
2. Verify `vercel.json` analytics setting
3. Check Vercel dashboard settings
4. Ensure site has traffic

## Best Practices

1. **Version Control**
   - Commit frequently
   - Write descriptive messages
   - Keep commits focused
   - Use branches for features

2. **Code Quality**
   - Follow existing patterns
   - Write clear code
   - Comment complex logic
   - Keep functions small

3. **Security**
   - Never commit secrets
   - Use environment variables
   - Keep dependencies updated
   - Follow security headers

4. **Performance**
   - Optimize images
   - Minimize bundle size
   - Use caching effectively
   - Monitor Core Web Vitals

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Git Hooks Guide](https://git-scm.com/docs/githooks)
- [EditorConfig Documentation](https://editorconfig.org/)
- Project maintainers

## Updating Settings

When updating configuration:
1. Document changes in this file
2. Update `.env.example` if needed
3. Notify team members
4. Test in preview environment
5. Deploy to production
