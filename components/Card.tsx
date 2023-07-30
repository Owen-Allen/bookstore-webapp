import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useCartContext } from '@/context/CartContext'
import { Book } from '@/pages/browse';

interface Props {
    book: Book
}

export default function Card(props: Props) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        // removeFromCart,
    } = useCartContext()

    const shortenTitle = (title: String) => {
        // reduce the title to be max 25 characters, and don't cut a word in half
        let title_words = title.split(' ')
        let length = 0
        let shortTitle = title_words[0]
        for(var i = 1; i < title_words.length; i++){
            length += title_words[i].length
            if (length > 25) break
            shortTitle += " " + title_words[i]
        }
        return shortTitle
    }

    const quantity = getItemQuantity(+props.book.isbn)


    const img_src = "https://pictures.abebooks.com/isbn/" + String(props.book.isbn) + "-us-300.jpg"
    console.log(props.book.title)
    console.log(img_src)

    return (
        <div className="flex flex-col w-96 sm:w-48 p-4 mx-8 mt-8 bg-orange-200 shadow-lg rounded">

            <Link href={`/book/${props.book.isbn}`}>
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={img_src} alt={"Image of " + props.book.title} />
            </Link>
            <a className="p-4 sm:pt-2 sm:pl-2" href={`/book/${props.book.isbn}`}>
                <span className=" pb-2 w-full font-bold text-lime-900 text-center">{"$" + props.book.price + ".00"}</span>
                <div className="h-20">
                    <span className="font-bold text-lime-900"> 
                        {props.book.title.length > 25 ? shortenTitle(props.book.title) + " ..." : props.book.title}
                    </span>
                    <span className="mb-3 block text-gray-500"> {props.book.author} </span>
                </div>

            </a>
            {
                quantity === 0 ?
                    // absolute bottom-0 left-20 sm:left-6 
                    <div className="flex flex-col grow justify-end">
                        <div className="flex justify-center">
                            <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="ease-in-out font-semibold duration-500 transition-opacity rounded-full w-28 h-8 bg-orange-300 text-black"> Add to Cart </button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col grow justify-end">
                        <div className="flex flex-row justify-center gap-2">
                            <button onClick={() => decreaseCartQuantity(+props.book.isbn)} className="font-bold rounded-full w-8 h-8 bg-orange-300 text-black"> – </button>
                            <div className="bg-orange-300 text-black border-black rounded-sm w-8 font-bold p-1 flex justify-center">
                                <a>{quantity}</a>
                            </div>
                            <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="font-bold rounded-full w-8 h-8 bg-orange-300 text-black"> ＋ </button>
                        </div>
                    </div>

            }
        </div>
    )
};


