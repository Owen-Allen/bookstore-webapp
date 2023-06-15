import { Html, Head, Main, NextScript } from 'next/document'
import Nav from "../components/Nav"

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <title>Bookstore</title>
      <Nav/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
