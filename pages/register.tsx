

import { Inter } from 'next/font/google'
import { useState } from 'react'

import Shipping from '../components/Shipping'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ includeShipping, setIncludeShipping ] = useState(false)
    const [ canSubmit, setCanSubmit ] = useState(false)

    const [ first, setFirst ] = useState("")
    const [ last, setLast ] = useState("")
    const [ address, setAddress] = useState("")
    const [ postalCode, setPostalCode ] = useState("")
    const [ city, setCity ] = useState("")
    const [ province, setProvince] = useState("")

    function submitRegistration(){
        console.log("submitRegistration")
        console.log(typeof username)
        console.log(username)
    }

    function allowRegistration(){

    }

    return(

        <main
        className={`flex bg-white
         min-h-screen flex-col items-center  ${inter.className}`}
      >
            <form className="mt-32 flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="flex flex-col items-left">
                    <label htmlFor="username" className="text-gray-800 mt-4">Username</label>
                    <input id="username" placeholder="book_fanatic" className="rounded py-3 px-4 mb-3 text-black w-64 00 border-gray-400 border-2" onChange={(x) => setUsername(x.target.value)}/>
                    <label htmlFor="password" className="text-gray-800 mt-4">Password</label>  
                    <input id="password" placeholder="***************************" type="password" className="rounded py-3 px-4 mb-3 text-gray-500 border-gray-400 border-2" onChange={(x) => setPassword(x.target.value)}/> {/* how do we make it hidden? */}
                </div>
                <div className="flex items-center m-8">
                    <label htmlFor="includeshipping" className="text-gray-400"> Would you like to include shipping details now for a faster checkout? </label>
                    <input id="includeshipping" className="ml-4" type="checkbox" onChange={() => setIncludeShipping(!includeShipping)}/>
                </div>
            
                { includeShipping && <Shipping/>

                }
            <a> Hello </a>
            <button className="bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 mb-16 rounded" onClick={() => submitRegistration()}  value="click">Submit</button>
            </form>








        </main>
    )
}