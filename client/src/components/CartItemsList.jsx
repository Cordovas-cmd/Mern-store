import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { CartItem } from "./CartItem";

export const CartItemsList = () => {
    const [cartItems] = useContext(CartContext);
    const numberOfItems = cartItems.length || 0;

    return (
        <div>
            <div
            style={{
                display: "grid",
                gap:"8px 8px",
                gridTemplateColumns: "1fr 5fr 2fr 2fr 1fr",
                justifyContent: "space-between",
                alignItems:"center",
            }}>
                {cartItems.map((item, index) => <CartItem key={item.id + item.title} index={index} item={item}/>)}
            </div>

            <p>Number of Items in cart: {numberOfItems}</p>
            <p>Your total is: $ ???</p>
        </div>
    )
}









































































































