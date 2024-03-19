// provide cart info for all other components
// use effect is a hook that helps us tie changes to a certain state variable
import { useState, useEffect } from "react";
import { createContext } from "react";

// context that needs to be managed.
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    
const [cartItems, setCartItems] = useState(() => 
JSON.parse(localStorage.getItem("cartItems") || [])
);

// use Effect will take two arguements, the first is a function, the second is a dependancy array. 
// whenever cart items change please execute this function.
useEffect(() => localStorage.setItem("cartItems", JSON.stringify(cartItems)), 
[cartItems]
);


    return (
        // 
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {children}
        </CartContext.Provider>
    );
};