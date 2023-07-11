import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from "@/context/CartContext"
import Nav from "@/components/Nav"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CartProvider> 
      <Nav />
    <Component {...pageProps} />
  </CartProvider>
  )
}
