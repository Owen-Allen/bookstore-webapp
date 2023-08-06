

import { useCartContext } from '@/context/CartContext'

import Link from 'next/link'

const Nav = () => {

  const { cartQuantity } = useCartContext()

  return (
    <nav
      className="relative flex w-full items-center bg-orange-300 shadow-md py-2 flex-wrap justify-start"
    >
      <div className="flex w-full items-center justify-between ">
        {/*<div className="flex items-center">
          <button
            className="border-0 text-black bg-transparent py-2 px-4 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>*/}

        {/* Navigation links */}
        <div
          className="mx-4 sm:mx-16 grow items-center flex basis-auto"
          id="navbarSupportedContentY"
        >
          <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
            <li className="pr-2">
              <Link
                className={"block font-semibold hover:text-black text-lime-900 transition duration-250 ease-in-out disabled:text-black/30 p-2 "}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="pr-2">
              <Link
                className="block font-semibold hover:text-black text-lime-900 transition duration-250 ease-in-out disabled:text-black/30 p-2"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            {/* <li className="mb-4 lg:mb-0 lg:pr-2">
              <Link
                className="block font-semibold hover:text-black text-lime-900 transition duration-250 ease-in-out disabled:text-black/30 lg:p-2"
                href="/about"
              >
                About
              </Link>
            </li> */}
          </ul>

          <div className={cartQuantity ? "font-sans inline-block align-middle text-black hover:text-gray-700" : "pointer-events-none font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"}>
            <Link href="/checkout" role="button" className="relative flex">
              <svg className="peer fill-lime-900 hover:fill-black transition duration-250 ease-in-out" fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                width="40px" height="40px" viewBox="0 0 902.86 902.86"
              >
                <g>
                  <g>
                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"/>
                  </g>
                </g>
              </svg>
              {cartQuantity === 0 ? "" :
                <span className="peer-hover:bg-red-700 transition ease-in-out duration-250 absolute right-5 top-0 rounded-full bg-red-600 hover:bg-red-700 w-4 h-4 top right p-0 m-0 text-yellow-100 font-mono text-sm  leading-tight text-center">
                  {cartQuantity < 10 ? cartQuantity : "*"}
                </span>
              }
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Nav;