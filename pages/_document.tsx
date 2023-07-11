import { Html, Head, Main, NextScript } from 'next/document'
import Nav from "../components/Nav"

export default function Document() {
  return (
    <Html lang="en" className='bg-orange-300'>
      <Head />
      <title>Bookstore</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
