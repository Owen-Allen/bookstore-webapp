
import Link from 'next/link'

import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`flex flex-col bg-yellow-50 h-full p-24 ${roboto.className}`}>
      <div className="flex flex-row text-black">
        <div className="basis-2/5 p-12">
          <h1 className={`text-black text-6xl`}>Welcome!</h1>
          <div className="mt-12">
            <a className="text-black">
              Welcome to my bookstore app! Go to the <Link className="font-bold hover:text-black" href="browse"> Browse page </Link> to explore the library, add books to cart, then try checking out. This app was built using Next.JS, TailwindCSS, PostgreSQL and Prisma.
            </a>
          </div>
          <div className="mt-12">
            <div className="text-gray-600">
              For more info, check out the project on <Link className="font-bold hover:text-black" href="https://github.com/Owen-Allen/bookstore-webapp">GitHub</Link>, or feel free to message me on <Link className="font-bold hover:text-black" href="https://www.linkedin.com/in/owen-allen00/"> LinkedIn </Link> or by email at <Link href="mailto:owenallen.2000@gmail.com" className="font-bold hover:text-black">owenallen.2000@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="basis-3/5">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780141020525-us-300.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780099506928-us-300.jpg" alt=""/>
        </div>

    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780552771108-us-300.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780552998482-us-300.jpg" alt=""/>
        </div>

    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9781905654284-us-300.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780747550990-us-300.jpg" alt=""/>
        </div>

    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9781841953922-us-300.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://pictures.abebooks.com/isbn/9780099771517-us-300.jpg" alt=""/>
        </div>

    </div>
</div>

        
        </div>
      </div>

    </main>
  )
}

{/* <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div>
          <h1 className="text-black text-5xl p-8">
            Welcome
          </h1>
              </div>
              </div>
                <p className="text-gray-800 w-3/4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br/> 
              */}