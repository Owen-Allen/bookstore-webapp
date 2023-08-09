# Bookstore Web Application

This project was created using TypeScript, Next.JS, Tailwind CSS and PostgreSQL/Prisma.

The project consists of a home page, a browse page where users can add books to cart, dynamic book pages using Next.js slug name, as well as a checkout page where user's can fill in their shipping and banking info.

Key components of the project are:
- a custom CartContext hook to preserve cart state using LocalStorage in the browser
- the browse page allows the user to search for individual books, as well as sort by criteria such as price, title and author as well as filter by genre
- Web hosting using Vercel (hobby) and database hosting through Supabase
- SSR for the individual book pages allowing for faster load times
- Client side data fetching for the browse page


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
