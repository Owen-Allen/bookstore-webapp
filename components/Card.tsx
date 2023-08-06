import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useCartContext } from '@/context/CartContext'
import { Book } from '@/pages/browse';

interface Props {
    book: Book
}

export function Card(props: Props) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        // removeFromCart,
    } = useCartContext()

    const quantity = getItemQuantity(+props.book.isbn)
    const img_src = "https://pictures.abebooks.com/isbn/" + String(props.book.isbn) + "-us-300.jpg"

    return (
        <div className={`w-full sm:w-48 p-4 mt-8 bg-orange-200 shadow-lg rounded`}> {/* flex flex-col*/}
            <Link href={`/book/${props.book.isbn}`}>
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={img_src} alt={"Image of " + props.book.title} />
            </Link>
            <Link className="flex flex-col p-4 sm:pt-2 sm:pl-2" href={`/book/${props.book.isbn}`}>
                <span className="font-semibold text-lime-900">{"$" + props.book.price + ".00"}</span>
                <div className="h-20">
                    <span className="font-semibold text-lime-900 line-clamp-2"> 
                        {props.book.title}
                    </span>
                    <span className="mb-3 block text-gray-500"> {props.book.author} </span>
                </div>
            </Link>
            {
                quantity === 0 ?
                    // absolute bottom-0 left-20 sm:left-6 
                    <div className="flex flex-col grow justify-end">
                        <div className="flex justify-center">
                            <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="ease-in-out font-semibold duration-500 transition-opacity rounded-full w-28 h-8 bg-orange-300 text-lime-900"> Add to Cart </button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col grow justify-end">
                        <div className="flex flex-row justify-center gap-2">
                            <button onClick={() => decreaseCartQuantity(+props.book.isbn)} className="font-bold rounded-full w-8 h-8 bg-orange-300 text-lime-900"> – </button>
                            <div className="bg-orange-300 text-lime-900 border-black rounded-sm w-8 font-bold p-1 flex justify-center">
                                <a>{quantity}</a>
                            </div>
                            <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="font-bold rounded-full w-8 h-8 bg-orange-300 text-lime-900"> ＋ </button>
                        </div>
                    </div>
            }
        </div>
    )
};

export const MemoizedCard = React.memo(Card)