import React from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Browse(){
    return(
        <main
        //bg-gradient-to-r from-indigo-100 from-0% via-white via-50% to-indigo-100 to-100%
          className={`flex bg-gray-100 min-h-screen flex-col ${inter.className}`}
        >
          <div className="p-8">
          <div className="text-black text-5xl p-8 font-mono -mt-8"> 
            Browse
          </div>

          <div className="flex pl-8 pr-8">
              <div id="sidebar" className="bg-red-500 w-1/4 h-screen">

              </div>
              <div id="content" className="bg-blue-500 w-3/4 h-screen">
                <div className="flex justify-center">
                  <div id="filters" className=" w-48 h-16 bg-green-500">
                  {/* Sort Filters */}
                  </div>
                  <div>
                  {/* Book Icons */}
                  </div>
                </div>

              </div>
          </div>

          </div>


        </main>
    );
}

{/* <div className="container mx-auto">
 <div className="flex flex-row flex-wrap py-4">
<aside className="w-full sm:w-1/3 md:w-1/4 px-2">
    <div className="sticky top-0 p-4 w-full">
        <!-- navigation -->
        <ul className="flex flex-col overflow-hidden">
            ...
        </ul>
    </div>
</aside>
<main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
    <!-- content area -->
</main>
</div>
</div>
<footer className="mt-auto">
...
</footer> */}