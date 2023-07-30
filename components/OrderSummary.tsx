import React, { useEffect, useState } from 'react'
import { Book } from '@/pages/browse'

type CartItem = {
    id: number,
    quantity: number
  }

interface Props {
    items: CartItem[],
    bookData: Book[],
    country: string,
    subtotal: number,
    total: number,
    shippingCost: number,
    tax: number,
    setSubtotal: Function,
    setTotal: Function,
    setShippingCost: Function,
    setTax: Function
}

const TAXRATE: number = 0.15
const SHIPPINGLOOKUP = new Map([['Canada', 5], ['United States', 10], ['Mexico', 12]])

export default function OrderSummary(props: Props) {
    const { items, bookData, country, subtotal, total, shippingCost, tax, setSubtotal, setTotal, setShippingCost, setTax } = props

    useEffect( () => {
        const computeTotals = () => {
            let newSubtotal = bookData.reduce( (acc,book) => {
                let newAmount = 0
                let index = items.findIndex(item => String(item.id) === book.isbn)
                console.log('index')
                console.log(index)
                if(index !== -1){
                    //Its possible that the user removed all this item 
                    let quantity = items[index].quantity
                    newAmount = (Number(quantity) * (book.price))
                }
                return acc + newAmount
            }, 0)
            setSubtotal(newSubtotal)
            let newShippingCost = SHIPPINGLOOKUP.get(country) || -1
            setShippingCost(newShippingCost)
            let newTax = parseFloat((newSubtotal * TAXRATE).toFixed(2))
            setTax(newTax)
            setTotal(newSubtotal + newShippingCost + newTax)
        }
        computeTotals()

        console.log("RECOMPUTE TOTAL")
    }, [items, bookData, country])

    return (
        <div className="flex flex-col bg-gray-50 rounded w-64 mt-5 p-5 mx-5 border border-lime-900">
            <h1 className="text-lime-900 text-2xl"> Order Summary </h1>
            <div className="flex flex-row justify-between mt-4 mb-1">
                <a className="text-lime-900 "> Subtotal </a>
                <a className="text-lime-900 "> ${subtotal.toFixed(2)} </a>
            </div>
            <div className="flex flex-row justify-between mb-1">
                <a className="text-lime-900"> Shipping </a>
                <a className="text-lime-900">  { shippingCost > 0 ? '$' + shippingCost.toFixed(2) : 'TBD'} </a>
            </div>
            <div className="flex flex-row justify-between">
                <a className="text-lime-900 mb-4"> Tax </a>
                <a className="text-lime-900">  ${tax.toFixed(2)} </a>
            </div>
            <div className="flex flex-row justify-between">
                <a className="text-lime-900 text-lg font-bold"> Total </a>
                <a className="text-lime-900 text-lg font-bold"> ${total.toFixed(2)} </a>
            </div>
        </div>
    )
}
