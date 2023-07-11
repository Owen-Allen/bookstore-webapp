import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/db'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("in handler")
  console.log('req')
  if (req.query && req.query.isbn){
    console.log("we made it")
    console.log(req.query)
    const isbn = String(req.query.isbn)
    console.log(isbn)
    const book = await prisma.book.findUnique({
      where: {
      isbn: isbn,
      }
  })
  res.status(200).json(book)
  }else{
  const books = await prisma.book.findMany()
  return res.status(200).json(books)
  }
}