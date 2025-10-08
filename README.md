```markdown
# Stewart Striping

Production-ready Next.js (App Router) project for Stewart Striping. The app is written in TypeScript, styled with Tailwind CSS, and uses Prisma for data access.

## Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 4 with `tailwindcss-animate`
- Prisma ORM (`@prisma/client`)
- NextAuth for authentication
- pnpm package manager

## Prerequisites
- Node.js ≥ 18 (tested with Node 22)
- pnpm (`npm install -g pnpm` if needed)
- PostgreSQL connection string for `DATABASE_URL`

## Environment variables
Copy `.env.example` to `.env.local` (or set values in your deployment platform):

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
NEXTAUTH_SECRET="long-random-string"
```

> The previous Abacus AI hosted credentials were removed. Provide your own database URL before running migrations or deploying. Make sure the same values are configured in Vercel.

## Install & run locally

```bash
pnpm install
pnpm prisma generate --schema app/prisma/schema.prisma
pnpm dev
```

Visit `http://localhost:3000` to view the app.

## Useful commands
- `pnpm dev` – Next.js dev server
- `pnpm build` – Production build (passes)
- `pnpm start` – Run the production build
- `pnpm run typecheck` – TypeScript project check (`tsconfig.json` in repo root)
- `pnpm prisma migrate dev` – Apply local Prisma migrations (requires `DATABASE_URL`)
- `pnpm prisma studio` – Prisma data browser

## Project structure
- `app/` – Next.js routes (`app/app`), styles, API handlers, auth
- `app/components/` – UI components (`ui/` contains Radix-based primitives)
- `app/lib/` – Prisma client, auth helpers, utilities
- `app/prisma/` – Prisma schema & seed script
- `scripts/seed.ts` – Seed demo data (run via `pnpm tsx app/scripts/seed.ts`)

## Deploying to Vercel
1. Connect the repository to Vercel.
2. In **Project Settings → Environment Variables**, add:
	- `DATABASE_URL` – production PostgreSQL connection string
	- `NEXTAUTH_SECRET` – long, random secret
3. (Optional) Use a pooled database URL or Prisma Accelerate for serverless deployments.
4. Trigger the deploy – `pnpm build` succeeds, so Vercel can build without issues.

## Database notes
- Prisma schema currently targets PostgreSQL. If you prefer SQLite for local dev, adjust `datasource db` in `app/prisma/schema.prisma` and regenerate the client.
- Update or remove demo seed data (`app/scripts/seed.ts`) to match your schema.

## Security reminders
- `.env` files are ignored via `.gitignore`; never commit secrets.
- Rotate any credentials previously stored in Abacus AI immediately.
- Clean Git history if needed (e.g., `git filter-repo`) to remove old secrets.

## Next steps
- Add CI (GitHub Actions) to run `pnpm build` and `pnpm run typecheck`
- Configure Vercel preview environments
- Integrate your preferred production database

The app now builds cleanly and is ready to deploy on Vercel once environment variables and database access are configured.
