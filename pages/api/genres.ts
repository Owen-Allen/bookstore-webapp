import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const uniqueGenres = await prisma.book.findMany({
            distinct: ['genre'],
            select: {
                genre: true,
            },
        });
        res.status(200).json(uniqueGenres.map((book) => book.genre));
    } catch (error) {
        console.error('Error retrieving unique genres:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
