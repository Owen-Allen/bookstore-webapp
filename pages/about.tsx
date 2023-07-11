import React from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Browse(){
    return(

      <div className="flex justify-center">
        <div className="h-96 relative flex flex-col justify-around">
          <div>01</div>
          <div>02</div>
          <div className="bottom-0 absolute bg-blue-200 w-8 h-8">03</div>
        </div>
      </div>
    );
}