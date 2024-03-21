import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import  { CartContext} from "../context/CartProvider";
import { getNumberOfItemsInCart } from "../utils/cartManagement";
import { CartItemsList } from "./CartItemsList";
import { Modal } from "./Modal";

export const ViewCart = () => {
    const navigate = useNavigate()
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
                <button onClick={()=> {
                    navigate("/check-out")
                    setVisibility(false)
                }}>Check out 🛒</button>
            </Modal>
            )}
        </>
    )
}