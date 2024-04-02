import { useState } from "react";
import { Modal } from "./Modal";
import { Column }  from "./Column";
import { Row } from "./Row";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { CartContext } from "../context/CartProvider";
import { getCartTotal, getNumberOfItemsInCart } from "../utils/cartManagement";


export const ConfirmModal = ({setIsConfirmed, label}) => {
    const [cartItems] = useContext(CartContext)
    // import current user in order to make request for order.
    const [ currentUser, token, ] = useContext(CurrentUserContext)
    const [isVisible, setVisibility] = useState(false)
    return(
        <>
        <button onClick={()=> setVisibility(true)}>{label}</button>
        {/* Only want to display if is Visible is true */}
        {isVisible &&<Modal setVisibility={setVisibility}>
            <Column>
            <h3>Are you sure?</h3>
            <Row style={{justifyContent: "center"}}>
                    <button onClick={ async ()=> {

                        try {
                            const cartTotal = getCartTotal(cartItems);
                            const numberOfItems= getNumberOfItemsInCart(cartItems);
                            await axios.post("http://localhost:3001/api/place-order", {...currentUser, cartItems, cartTotal, numberOfItems
                        }, 
                        { headers: { authorization: `Bearer ${token}`} } 
                        );
                            setIsConfirmed(true);
                            setVisibility(false);
                        }
                        catch(e) {
                            console.log("Error placing order", e)
                        }
                    }}>✅Confirm</button>
                    <button onClick={()=> {
                        setVisibility(false)
                    }}>✖Cancel</button>

            </Row>
            </Column>
        </Modal>}
                    </>
    );
}