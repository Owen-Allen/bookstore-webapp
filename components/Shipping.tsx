

import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Shipping() {

    const [ first, setFirst ] = useState("")
    const [ last, setLast ] = useState("")
    const [ address, setAddress] = useState("")
    const [ postalCode, setPostalCode ] = useState("")
    const [ city, setCity ] = useState("")
    const [ province, setProvince] = useState("")

    return(
        <div className="flex flex-col items-left">
            <label htmlFor="first" className="text-gray-800">First</label>
            <input id="first" className="rounded py-3 px-4 mb-3 text-black w-64 00 border-gray-400 border-2" onChange={(x) => setFirst(x.target.value)}/>
            <label htmlFor="last" className="text-gray-800">Last</label>  
            <input id="last" className="rounded py-3 px-4 mb-3 text-gray-500 border-gray-400 border-2" onChange={(x) => setLast(x.target.value)}/>
            <label htmlFor="address" className="text-gray-800 ">Address</label>
            <input id="address"  className="rounded py-3 px-4 mb-3 text-black w-64 00 border-gray-400 border-2" onChange={(x) => setAddress(x.target.value)}/>
            <label htmlFor="postal" className="text-gray-800">Postal Code</label>  
            <input id="postal" className="rounded py-3 px-4 mb-3 text-gray-500 border-gray-400 border-2" onChange={(x) => setPostalCode(x.target.value)}/>
            <label htmlFor="city" className="text-gray-800 ">City</label>
            <input id="city"  className="rounded py-3 px-4 mb-3 text-black w-64 00 border-gray-400 border-2" onChange={(x) => setCity(x.target.value)}/>
            <label htmlFor="province" className="text-gray-800">Province</label>  
            <input id="province" className="rounded py-3 px-4 mb-3 text-gray-500 border-gray-400 border-2" onChange={(x) => setProvince(x.target.value)}/>
        </div>
    )
}