import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  const path = router.pathname
  console.log(path)

  return (
    <main
    //bg-gradient-to-r from-indigo-100 from-0% via-white via-50% to-indigo-100 to-100%
      className={`flex bg-orange-300
       min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1 className="text-black text-5xl p-8">
            Welcome
          </h1>
              {/* some image here */}
        </div>
      </div>
        <p className="text-gray-800 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br/>
    </main>
  )
}
