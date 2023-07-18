import React from 'react'
import { Shipping } from '@/pages/checkout'

interface Props {
  setShipping: Function
  shippingInfo: Shipping
}

export default function ShippingDetails({shippingInfo, setShipping}: Props) {

  const updateShippingInfo = (e: any) =>{
    const keys = Object.keys(shippingInfo)
    const name = e.target.name
    const value = e.target.value
    console.log(name)
    console.log(keys)
    if(keys.includes(name)){
      setShipping( {...shippingInfo, [name]: value}) // computed property names
    }else{
      console.log("Invalid form input name")
    }
  }

  return (
    <form className="flex w-full flex-col flex-wrap gap-3 p-5 grow bg-gray-50 rounded-lg mt-5 m-5 shadow">
      <label className="flex relative w-full flex-col">
        <span className="mb-3 font-semibold text-sm text-lime-900">Email</span>
        <input className="peer rounded-md border-2 border-gray-200 p-2 py-2 pl-4 placeholder-gray-300 text-lime-900" defaultValue={shippingInfo.email} type="text" name="email" onChange={ (e) => updateShippingInfo(e)} placeholder="tim@gmail.com" />
      </label>

      <div className="flex flex-row flex-wrap grow gap-3" >
        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="mb-3 font-semibold text-sm text-lime-900">First Name</span>
          <input className="peer rounded-md border-2 border-gray-200 p-2 py-2 pl-4 placeholder-gray-300 text-lime-900" value={shippingInfo.fname} type="text" name="fname" onChange={ (e) => updateShippingInfo(e)} placeholder="Tim" />
        </label>

        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="flex mb-3 gap-3 font-semibold text-sm text-lime-900"> Last Name </span>
          <input className="peer rounded-md border-2 border-gray-200 py-2 pl-4 pr-2 placeholder-gray-300 text-lime-900" value={shippingInfo.lname} type="text" name="lname" onChange={ (e) => updateShippingInfo(e)} placeholder="Robinson" />
        </label>
      </div>
      <div className="flex flex-row flex-wrap grow gap-3" >
        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="mb-3 font-semibold text-sm text-lime-900">Address</span>
          <input className="peer rounded-md border-2 border-gray-200 p-2 py-2 pl-4 placeholder-gray-300 text-lime-900" value={shippingInfo.address} type="text" name="address" onChange={ (e) => updateShippingInfo(e)} placeholder="32 Pretoria Ave" />
        </label>

        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="flex mb-3 gap-3 font-semibold text-sm text-lime-900"> City </span> {/*items-center*/}
          <input className="peer rounded-md border-2 border-gray-200 py-2 pl-4 pr-2 placeholder-gray-300 text-lime-900" value={shippingInfo.city} type="text" name="city" onChange={ (e) => updateShippingInfo(e)} placeholder="Ottawa" />
        </label>

      </div>

      <div className="flex flex-row flex-wrap grow gap-3" >
        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="mb-3 font-semibold text-sm text-lime-900">Postal Code</span>
          <input className="peer rounded-md border-2 border-gray-200 p-2 py-2 pl-4 placeholder-gray-300 text-lime-900" value={shippingInfo.postalcode} type="text" name="postalcode" onChange={ (e) => updateShippingInfo(e)} placeholder="K1S 1H2" />
        </label>

        <label className="flex relative flex-1 flex-col md:w-full">
          <span className="flex mb-3 items-center gap-3 font-semibold text-sm text-lime-900">Country</span>
          <select className="peer text-lime-900 rounded-md border-2 border-gray-200 py-2 pl-4 pr-2 placeholder-gray-300" value={shippingInfo.country} name="country" onChange={ (e) => updateShippingInfo(e)}>
            <option value="" disabled selected>Select a country</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Mexico">Mexico</option>
          </select>
        </label>
      </div>
    </form>
  )
}

