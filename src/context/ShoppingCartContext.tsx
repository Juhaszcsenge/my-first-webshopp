import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/"


type ShoppingCartProvideprops = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children }:
     ShoppingCartProvideprops) {
        const [cartItems, setCartItems] = useState<CartItem[]>([])
    return (
        <ShoppingCartContext.Provider value= {{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}