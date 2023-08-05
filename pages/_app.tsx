import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from "@/context/CartContext"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CartProvider> 
      <Nav />
      <Component {...pageProps} />
      {/* <Footer/> */}
  </CartProvider>
  )
}
