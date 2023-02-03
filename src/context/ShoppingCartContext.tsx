import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ShoppingCartProvideprops = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItem: CartItem []
}

const ShoppingCartContext = createContext({} as ShoppingCartProvideprops)



export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider( { children }: ShoppingCartProvideprops) {
    const [isOpen, setIsOpen] =useState(false)
    const [cartItems, setItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )
}

const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
)


const openCart = () => setIsOpen(ture)
const closeCart = () => setIsOpen(false)


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
      if (currItems.find(item => item.id === id) == 1) {
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
        setCartItem(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    
    return (
        <ShoppingCartContext.Provider value= 
        {{ 
            getItemQuantity,
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
        }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
function setIsOpen(ture: any) {
    throw new Error("Function not implemented.");
}

function ture(ture: any) {
    throw new Error("Function not implemented.");
}

function setCartItems(arg0: (currItems: any) => any) {
    throw new Error("Function not implemented.");
}

function setCartItem(arg0: (currItems: any) => any) {
    throw new Error("Function not implemented.");
}

