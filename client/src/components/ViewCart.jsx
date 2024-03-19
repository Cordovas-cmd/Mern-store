import { useState } from "react";
import { useContext } from "react";
import  { CartContext} from "../context/CartProvider";
import { getNumberOfItemsInCart } from "../utils/cartManagement";
import { CartItemsList } from "./CartItemsList";
import { Modal } from "./Modal";

export const ViewCart = () => {
    const [cartItems] = useContext(CartContext)
    const [isVisible, setVisibility] = useState(false);

    const numberOfItemsInCart = getNumberOfItemsInCart(cartItems)


    return (
        <>
        {/* toggle visibility */}
        <button onClick={() => setVisibility(true)}>🛒{ numberOfItemsInCart > 0 ? `(${numberOfItemsInCart}) ` : ""}</button>
        {isVisible && (
            <Modal setVisibility={setVisibility}>
                <CartItemsList />
            </Modal>
            )}
        </>
    )
}