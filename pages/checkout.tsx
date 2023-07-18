import React, { useState, useEffect, useReducer } from 'react'
import { useCartContext } from '@/context/CartContext'
import ReviewTable from '@/components/ReviewTable'
import BankDetails from '@/components/BankForm'
import ShippingDetails from '@/components/ShippingForm'
import OrderSummary from '@/components/OrderSummary';
import { Book } from '@/pages/browse'

export interface Shipping {
    email: string,
    fname: string,
    lname: string,
    address: string,
    city: string,
    postalcode: string,
    country: string
}

interface Card {
    cardNumber: string;
    cardExpiryDate: string;
    CVV: string
}

export default function Checkout() {

    // 4 stages, review, shipping details, card details and order complete
    const [stage, setStage] = useState("review")
    const [bookData, setBookData] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [shippingInfo, setShipping] = useState<Shipping>({ email: '', fname: '', lname: '', address: '', city: '', postalcode: '', country: '' })
    const [cardInfo, setCard] = useState<Card>({ cardNumber: '', cardExpiryDate: '', CVV: '' })

    const [errors, setErrors] = useState<string[]>([])

    const [ subtotal, setSubtotal ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ shippingCost, setShippingCost ] = useState(0)
    const [ tax, setTax ] = useState(0)
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
    } = useCartContext()

    const loadBookData = async () => {
        console.log('fetching table data')
        const requests: Promise<any>[] = [];
        cartItems.forEach((item) => {
            requests.push(getBook(item.id))
        })
        Promise.all(requests).then((bookData) => {
            setBookData(bookData)
        }
        )
    }

    const getBook: any = async (isbn: number) => {
        return new Promise((resolve, reject) => {
            fetch(`/api/books?isbn=${isbn}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
        })
    }

    const nextStage = (newStage: string) => {
        if (newStage === "banking") {
            // need to make sure shippingInfo is valid before we can setStage
            let shippingValid = true
            let newErrors = []
            if (!shippingInfo.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                shippingValid = false
                newErrors.push("Invalid email address.")
            }
            if (!shippingInfo.fname) {
                shippingValid = false
                newErrors.push("Missing first name.")
            }
            if (!shippingInfo.lname) {
                shippingValid = false
                newErrors.push("Missing last name.")
            }
            if (!shippingInfo.city) {
                shippingValid = false
                newErrors.push("Missing city.")
            }
            if (!shippingInfo.postalcode) {
                shippingValid = false
                newErrors.push("Missing postal code.")
            }
            if (!shippingInfo.country) {
                shippingValid = false
                newErrors.push("Missing country.")
            }

            if (shippingValid) {
                setStage(newStage)
                setErrors([])
            } else {
                setErrors(newErrors)
            }
        }
    }

    const goBack = (newStage: string) => {
        setErrors([])
        setStage(newStage)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [cartItems])

    useEffect(() => {
        loadBookData() // Should only call loadBookData once cartItems have been fetched
    }, [isLoading])

    console.log(shippingInfo)

    return (
        <div className="flex flex-col min-h-screen h-screen overflow-auto bg-yellow-50">
            <main
                className={`flex justify-center bg-yellow-50 pt-16 sm:p-16`}>
                <div className="w-full sm:w-11/12"> {/**/}
                    <div className="text-lime-900 text-6xl p-8 font-mono mb-6 -mt-8 ">  {/* bg-white sm:bg-yellow-500 md:bg-blue-500 lg:bg-red-500 */}
                        Checkout
                    </div>
                    {/* show little progress bar */}
                    {stage == "review" &&
                        <div className="min-w-max p-4 bg-orange-200 rounded-3xl">
                            <h1 className="text-xl mb-2 ml-5 text-lime-900 mt-4">Review your Cart</h1>
                            {!!bookData.length ?
                                <div className="flex flex-row">
                                    <ReviewTable bookData={bookData} getItemQuantity={getItemQuantity} increaseCartQuantity={increaseCartQuantity} decreaseCartQuantity={decreaseCartQuantity} />

                                    <div className="flex flex-col">
                                    <OrderSummary items={cartItems} bookData={bookData} country={shippingInfo.country} subtotal={subtotal} total={total} shippingCost={shippingCost} tax={tax} setSubtotal={setSubtotal} setTotal={setTotal} setShippingCost={setShippingCost} setTax={setTax} />
                                        <div className="flex justify-center">
                                            <label htmlFor="checkoutbutton" className="w-32 mt-5 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                Next Step
                                            </label>
                                            <input type="button" id="checkoutbutton" onClick={() => setStage('shipping')} />
                                        </div>
                                    </div>
                                </div> : <div className="flex justify-center p-16 text-3xl text-lime-900">Loading ...</div>}
                        </div>}


                    {stage == "shipping" &&
                        <div className="min-w-max p-4 bg-orange-200 rounded-3xl">
                            <h1 className="text-xl mb-2 ml-5 text-lime-900 mt-4">Add Shipping Details</h1>
                            <div className="flex flex-row">
                                <ShippingDetails shippingInfo={shippingInfo} setShipping={setShipping} />
                                <div className="flex flex-col">
                                <OrderSummary items={cartItems} bookData={bookData} country={shippingInfo.country} subtotal={subtotal} total={total} shippingCost={shippingCost} tax={tax} setSubtotal={setSubtotal} setTotal={setTotal} setShippingCost={setShippingCost} setTax={setTax} />
                                    <div className="flex justify-center mt-5 gap-1">
                                        <label htmlFor="returntoreview" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Go Back
                                        </label>
                                        <input type="button" id="returntoreview" onClick={() => goBack('review')} />
                                        <label htmlFor="completeorder" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Next Step
                                        </label>
                                        <input type="button" id="completeorder" onClick={() => nextStage('banking')} />
                                    </div>
                                    <div className="flex flex-col w-full justify-center">
                                            {!!errors.length && <a className="text-red-900 text-center font-bold p-6"> Missing or invalid shipping data. </a>}
                                    </div>
                                </div>

                            </div>
                        </div>
                    }

                    {stage == "banking" &&
                        <div className="min-w-max p-4 bg-orange-200 rounded-3xl">
                            <h1 className="text-xl mb-2 ml-5 text-lime-900 mt-4">Add Card Details</h1>
                            <div className="flex items-start flex-row">
                                <BankDetails />
                                <div className="flex flex-col">
                                <OrderSummary items={cartItems} bookData={bookData} country={shippingInfo.country} subtotal={subtotal} total={total} shippingCost={shippingCost} tax={tax} setSubtotal={setSubtotal} setTotal={setTotal} setShippingCost={setShippingCost} setTax={setTax} />
                                    <div className="flex justify-center mt-5 gap-1">
                                        <label htmlFor="returntoreview" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Go Back
                                        </label>
                                        <input type="button" id="returntoreview" onClick={() => setStage('shipping')} />
                                        <label htmlFor="completeorder" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Complete
                                        </label>
                                        <input type="button" id="completeorder" onClick={() => setStage('complete')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}


