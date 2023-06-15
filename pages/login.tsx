

import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    function submitLogin(){
        console.log("submitLogin")
        console.log(typeof username)
        console.log(username)
    }

    return(

        <main
        className={`flex bg-white
         min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="flex flex-col items-left">
                <a className="text-gray-800 mt-4 mb-4">Username</a>
                <input className="w-32 text-gray-500 border-gray-400 border-2" onChange={(x) => setUsername(x.target.value)}/>
                <a className="text-gray-800 mt-4 mb-4">Password</a>  
                <input className="w-32 text-gray-500 border-gray-400 border-2" onChange={(x) => setPassword(x.target.value)}/> {/* how do we make it hidden? */}
            </div>

            <input type="button" onClick={() => submitLogin()} className="text-gray-800 w-16" value="click"/>


        </div>
        </main>
    )
}