import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/db'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.query && req.query.isbn) {
    // for a specific book
    const isbn = String(req.query.isbn)
    const book = await prisma.book.findUnique({
      where: {
        isbn: isbn,
      }
    })
    console.log(book)
    res.status(200).json(book)
  } else {
    const books = await prisma.book.findMany()
    return res.status(200).json(books)
  }
}