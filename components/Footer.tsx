import React from 'react'
import Link from 'next/link'

export default function Footer() {
    // github, linkedin,
  return (
    <div className="w-full text-sm bg-yellow-50 flex flex-row justify-center">
        <Link href="https://github.com/Owen-Allen" className="m-4 text-gray-600">GitHub</Link>
        <div className="my-4 text-gray-400">|</div>
        <Link href="https://www.linkedin.com/in/owen-allen00/" className="m-4 text-gray-600">LinkedIn</Link>
        <div className="my-4 text-gray-400">|</div>
        <Link href="mailto:owenallen.2000@gmail.com" className="m-4 text-gray-600">Email</Link>
    </div>
  )
}
