import { useState } from "react";
import { useContext } from "react";
import { Modal } from "./Modal"
import { getNumberOfItemsInCart } from "../utils/cartManagement";
import { CartItemsList } from "./CartItemsList";

export const ViewCart = () => {
    const [cartItems] = useContext(CartContext)
    const [isVisible, setVisibility] = useState(false);

    const numberOfItemsInCart = getNumberOfItemsInCart(cartItems)


    return (
        <>
        {/* toggle visibility */}
        <button>🛒{numberOfItemsInCart > 0 && ({ numberOfItemsInCart })}</button>
        {isVisible && (<Modal setVisibility={setVisibility}>
            <CartItemsList />
            </Modal>
            )}
        </>
    )
}