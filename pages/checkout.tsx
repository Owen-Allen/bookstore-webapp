import React, { useState, useEffect } from 'react'
import { useCartContext } from '@/context/CartContext'

export default function Checkout() {

    // 3 stages, review, card and contact details, and order complete

    const [stage, setStage] = useState("review")

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
    } = useCartContext()



    const fetchBook =  async (isbn: string) => {
        console.log('in fetchBook')

        const data = await fetch(`/api/books?isbn=${isbn}`)
        console.log(data)

    }
    useEffect( () => {
        console.log("useEffect")
        fetchBook('9780752837505')
    }, [])

    console.log(cartItems)

    return (
        <div className="min-h-screen h-screen overflow-auto bg-yellow-50">
            <main
                className={`flex bg-yellow-50 flex-col p-16`}>
                <div className="flex">
                    <div className="text-lime-900 text-6xl p-8 font-mono -mt-8">
                        Checkout
                    </div>
                </div>

                {/* show little progress bar */}

                <div className="p-4 bg-orange-200 rounded-3xl">
                    <h1 className="text-xl mb-2 ml-2 text-lime-900 mt-4">Review your Cart</h1>
                    <div className="overflow-auto rounded-lg shadow hidden md:block">
                        <table className="w-full mt-4">
                            <thead className="bg-gray-50 border-b-2 border-gray-200 text-lime-900">
                                <tr>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Author</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">

                                {cartItems.map((book) =>
                                    <tr key={`${book.id}`} className="bg-white">
                                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a href={"/book/" + book.id} className="font-bold text-red-800 hover:underline"> {book.id}</a>
                                        </td>
                                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            Dan Brown
                                        </td>
                                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            $8.00
                                        </td>
                                        <td className="text-sm text-gray-700 whitespace-nowrap">
                                            <div className="flex justify-start mt-1">
                                                <button onClick={() => decreaseCartQuantity(book.id)} className="font-bold rounded-full mt-1 w-6 h-6 bg-orange-300 text-black"> – </button>
                                                <div className="text-black border-black rounded-sm w-8 font-bold p-2 flex justify-center">
                                                    <a>{book.quantity}</a>
                                                </div>
                                                <button onClick={() => increaseCartQuantity(book.id)} className="font-bold rounded-full mt-1 w-6 h-6 bg-orange-300 text-black"> ＋ </button>
                                            </div>
                                        </td>
                                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$16.00</td>
                                    </tr>


                                )}



                                <tr className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-red-800 hover:underline">The Da Vinci Code</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Dan Brown
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        $8.00
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$16.00</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-500 hover:underline">10002</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-500 hover:underline">10002</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="flex justify-center mt-4">
                        <label htmlFor="checkoutbutton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Check Out
                        </label>
                        <input type="button" id="checkoutbutton" />
                    </div>
                </div>
            </main>
        </div>
    )
}


