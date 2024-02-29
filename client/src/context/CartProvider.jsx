// provide cart info for all other components
import { useState } from "react";
import { createContext } from "react";

// context that needs to be managed.
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const  [cartItems, setCartItems] = useState([])

    return (
        // 
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {children}
        </CartContext.Provider>
    )
}