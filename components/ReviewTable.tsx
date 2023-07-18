import React from 'react'
import Link from 'next/link'

import { Book } from '@/pages/browse'

interface Props {
    bookData: Book[],
    getItemQuantity: Function,
    increaseCartQuantity: Function,
    decreaseCartQuantity: Function,
    }

export default function ReviewTable(props: Props) {
    const { bookData, getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = props

    return (

        <>
        <div className="p-5 grow">
        <div className="overflow-auto rounded-lg shadow md:block">
         <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-red-200 text-lime-900">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Author</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-red-100">
                {bookData.map((book) =>
                    <tr key={`${book.isbn}`} className="bg-gray-50">
                        <td className="p-3 text-sm text-lime-900 whitespace-nowrap">
                            <Link href={"/book/" + book.isbn} className="font-semibold text-lime-900 hover:underline"> {book.title}</Link>
                        </td>
                        <td className="p-3 text-sm text-lime-900 whitespace-nowrap">
                            {book.author}
                        </td>
                        <td className="p-3 text-sm text-lime-900 whitespace-nowrap">
                            {'$' + Number(book.price).toFixed(2)}
                        </td>
                        <td className="text-sm text-lime-900 whitespace-nowrap">
                            <div className="flex justify-start mt-1">
                                <button onClick={() => decreaseCartQuantity(+book.isbn)} className="font-bold rounded-full mt-1 w-6 h-6 bg-orange-300 text-black"> – </button>
                                <div className="text-black border-black rounded-sm w-8 font-bold p-2 flex justify-center">
                                    <a>{getItemQuantity(+book.isbn)}</a>
                                </div>
                                <button onClick={() => increaseCartQuantity(+book.isbn)} className="font-bold rounded-full mt-1 w-6 h-6 bg-orange-300 text-black"> ＋ </button>
                            </div>
                        </td>
                        <td className="w-32 p-3 text-sm text-gray-700 whitespace-nowrap">{'$' + (getItemQuantity(+book.isbn) * book.price).toFixed(2)}</td>
                    </tr>

                )}
            </tbody>
        </table>
        </div>
        </div>
        </>
    )
}