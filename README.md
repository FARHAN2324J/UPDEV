# UPDEV
> Stay up-to-date as a developer

![UPDEV Preview](./public/readme/updev.jpg)




🌐 Live Demo: [UPDEV](https://updev-app.vercel.app/)


## About

Every day, new updates and blog posts are published on popular technology websites.

Keeping up often meant switching between multiple websites, wasting time, and still missing important updates.

UPDEV solves this by collecting the latest articles and updates from trusted sources into a single, clean, and organized platform.

##  Features

- 📰 Aggregated RSS feeds
- 🏷️ Filter articles by category
- 📄 Pagination: browse through a clean, paginated feed
- 🔍 Clean and intuitive reading experience
- 🌐 Deployed on Vercel


## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| ORM | Prisma |
| Data Source | RSS Feeds |
| Deployment | Vercel |

## Project Structure

```text
UPDEV/
├── app/               # Next.js App Router (pages, layouts, routes)
├── components/        # Reusable React components
├── lib/               # Utility functions, RSS fetching logic, and constants
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets
├── types/             # TypeScript type definitions
├── next.config.ts     # Next.js configuration
├── prisma.config.ts   # Prisma configuration
└── vercel.json        # Vercel Cron Jobs configuration
```


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FARHAN2324J/UPDEV.git
cd UPDEV
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Fill in the values with your own Supabase database credentials.

### 4. Apply database migrations

```bash
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to open an issue or submit a pull request.


## 👨‍💻 Author

**Farhan Fadaei**


- GitHub: [FARHAN2324J](https://github.com/FARHAN2324J)
- LinkedIn: [Farhan Fadaei](https://www.linkedin.com/in/farhan-fadaei)
- Portfolio: [Portfolio](https://farhan2324j.github.io/FarhanFadaei/)
- Telegram: [@Feri3044](https://t.me/Feri3044)

