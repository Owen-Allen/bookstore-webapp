import { ReactNode, createContext, useContext, useState, useEffect } from "react";

type Props = {
    children: ReactNode
  }

type CartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

type CartItem = {
  id: number,
  quantity: number
}

const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: Props) {
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])

    useEffect(() => {
      // initial load, try and get from localstorage
      if (typeof window !== 'undefined' && window.localStorage) {
        let localCart = localStorage.getItem("cart")
        if (localCart && localCart !== undefined){ // cart exists
          let cartData = JSON.parse(localCart)
          setCartItems(cartData)
        }
      }
    }, []);

    useEffect(() => {
      // update values in localstorage
      let localCart = JSON.stringify(cartItems)
      localStorage.setItem("cart", localCart)
    }, [cartItems] )

    const cartQuantity = cartItems.reduce(
      (quantity, item) => item.quantity + quantity, 0
    )

    function getItemQuantity(id: number){
      return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
      setCartItems(currItems => {
        if (currItems.find(item => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }]
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          })
        }
      })
    }

    function decreaseCartQuantity(id: number) {
      setCartItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }

    function removeFromCart(id: number) {
      setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
      })
    }
  
  return (
    <CartContext.Provider value={ 
      {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartQuantity,
      cartItems
      }
    }>
    {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}