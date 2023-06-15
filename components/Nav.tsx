

const Nav = () => {
  // TO DO
  // add logo or something, or adjust symbols to the right
  return (
      <nav
        className="relative flex w-full items-center justify-between bg-gray-100 py-2 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between "> {/* removed px-3 */}
          <div className="flex items-center">
            {/*  Hamburger menu button */}
            <button
              className="border-0 text-black bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* Hamburger menu icon */}
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
          </div>

          {/* Navigation links */}
          <div
            className="!visible ml-16 hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul className="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <a
                  className={"block text-gray-800 transition duration-150 ease-in-out disabled:text-black/30 lg:p-2 [&.active]:text-black/90 "}
                  href="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <a
                  className="block text-gray-800 transition duration-150 ease-in-out disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                  href="/browse"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Browse
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <a
                  className="block text-gray-800 transition duration-150 ease-in-out disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                  href="/about"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About
                </a>
              </li>
            </ul>
            <a
              className="mr-16 block text-gray-800 transition duration-150 ease-in-out disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              href="/other"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Checkout
            </a>
          </div>
        </div>
      </nav>
  );
}


export default Nav;