
import Link from 'next/link'

import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function NotFound() {
    return (
        <main className={`flex flex-col bg-yellow-50 h-screen p-24 ${roboto.className}`}>
            <h1 className={`${roboto.className} w-full text-center text-lime-900 text-6xl p-8 mt-32 `}>
                Page not found :(
            </h1>
            <h2 className={`${roboto.className} w-full text-center text-lime-900 p-8 `}>
                <Link className="font-bold" href="/">click here to go home</Link>
            </h2>
        </main>
    )
}

