import React from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'
import { Book } from '@/pages/browse'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
interface Props {
  book: Book
}

export default function Book({ book }: Props) {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCartContext()

  const quantity = getItemQuantity(+book.isbn)
  const img_src = "https://pictures.abebooks.com/isbn/" + String(book.isbn) + "-us-300.jpg"

  return (
    <div className="min-h-screen h-fit overflow-auto bg-yellow-50 text-black px-64 py-16">

      <div className="flex flex-row text-black">
        <div className="basis-1/2 pr-16">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="shadow-xl"
            src={img_src} alt={"Image of " + book.title} />
        </div>
        <div className={`basis-1/2 `}>
          <h1 className={`text-5xl mb-8 ${roboto.className} `}>{book.title}</h1>
          <h2 className={`text-2xl mb-4 ${roboto.className} `}>{book.author}</h2>
          <data className={`text-2xl mb-4 block ${roboto.className}`}>${Number(book.price).toFixed(2)}</data>
          <div className="mb-8">
            <span className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
          {
            quantity === 0 ?
              <div className="flex">
                <button onClick={() => increaseCartQuantity(+book.isbn)} className="ease-in-out font-semibold duration-500 transition-opacity rounded-full w-40 h-12 bg-orange-300 text-black text-xl"> Add to Cart </button>
              </div>
              :
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <button onClick={() => decreaseCartQuantity(+book.isbn)} className="font-bold rounded-full w-12 h-12 bg-orange-300 text-black text-xl"> – </button>
                  <div className=" text-black text-2xl w-12 font-bold p-2 flex justify-center">
                    <a>{quantity}</a>
                  </div>
                  <button onClick={() => increaseCartQuantity(+book.isbn)} className="font-bold rounded-full w-12 h-12 bg-orange-300 text-black text-xl"> ＋ </button>
                </div>
              </div>

          }
        </div>

      </div>

    </div>
  )
}


export async function getServerSideProps(context: any) {
  // Fetch data from external API
  console.log(context.query.id)
  console.log(process.env.URL + `/api/books?isbn=${context.query.id}`)
  const response = await fetch(process.env.URL + `/api/books?isbn=${context.query.id}`)
  const book = await response.json()
  console.log(book)

  if (!book) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // Pass data to the page via props
  return { props: { book } }
}

