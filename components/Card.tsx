import React from 'react'
import Image from 'next/image'

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

    const quantity = getItemQuantity(+props.book.isbn)

    const img_src = "https://pictures.abebooks.com/isbn/" + String(props.book.isbn) + "-us-300.jpg"
    return (
        <div className="flex flex-col p-4 mx-8 mt-8 w-full sm:w-48 md:w-48 lg:w-48 bg-orange-200 rounded"> {/* or should it just be ALWAYS w-48? w-full sm:w-48 md:w-48 lg:w-48 */}
            <a href={`/book/${props.book.isbn}`}> 
            <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            src={img_src} alt={"Image of " + props.book.title} />
            </a>
            <div className="relative pt-2 pb-8 h-full flex flex-col">
                <a href={`/book/${props.book.isbn}`}> 
                <span className="font-bold text-lime-900"> {props.book.title} </span>
                <span className="mb-3 block text-gray-500"> {props.book.author} </span>
                </a>
                <div className="flex justify-center">
                    {/* <button className="peer absolute bottom-0 left-0 rounded-full w-8 h-8 bg-orange-300 text-black"> ＋ </button> */}
                    
                    {
                    quantity === 0 ?
                    <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="ease-in-out font-semibold duration-500 transition-opacity absolute bottom-0 left-6 rounded-full w-28 h-8 bg-orange-300 text-black"> Add to Cart </button>
                        :
                    <>
                    <button onClick={() => decreaseCartQuantity(+props.book.isbn)} className="font-bold absolute bottom-0 left-6 rounded-full w-8 h-8 bg-orange-300 text-black"> – </button>
                    <div className="bg-orange-300 text-black border-black rounded-sm w-8 font-bold absolute bottom-0 p-1 flex justify-center"> 
                        <a>{quantity}</a>
                    </div>
                    <button onClick={() => increaseCartQuantity(+props.book.isbn)} className="font-bold absolute bottom-0 right-6 rounded-full w-8 h-8 bg-orange-300 text-black"> ＋ </button>
                    
                    </>
                
                    }
                </div>
            </div>
        </div>   
    )
};

   {/* <button className="peer absolute bottom-0 left-0 rounded-full w-8 h-8 bg-orange-300 text-black"> ＋ </button>
                    <button className="invisible peer-hover:visible hover:visible ease-in-out duration-500 transition-opacity absolute bottom-0 left-0 rounded-full w-40 h-8 bg-orange-300 text-black"> ＋  Add to Cart </button>  */}


<div className="flex justify-center">
<div className="h-96 relative flex flex-col justify-around">
  <div>01</div>
  <div>02</div>
  <div className="bottom-0 absolute bg-blue-200 w-8 h-8">03</div>
</div>
</div>

