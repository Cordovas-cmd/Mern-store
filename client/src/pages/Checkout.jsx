import { useNavigate } from "react-router-dom";
import { Column } from "../components/Column"
import { useContext, useState, useEffect } from "react"
import { CartItemsList } from "../components/CartItemsList";
import { Row } from "../components/Row"
import { ConfirmModal } from "../components/ConfirmModal";
import {CartContext} from "../context/CartProvider"
// want to view a summary of my order, a confirmation button as well as my information. 

export const CheckOut = () => {
    const waitTime = 5 * 1000;
    const navigate= useNavigate();
    const [, setCartItems]  = useContext(CartContext)
    const [timeRemaining, setTimeRemaining] = useState(waitTime / 1000)
    // check if order has been confirmed
    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(()=> {
        if(isConfirmed){
            setCartItems([]);
                setTimeout(()=> navigate("/"), waitTime)
                // subtract 1 from time remaining per second
                setInterval(()=> setTimeRemaining(pre => pre - 1), 1000)
        }
    }, [isConfirmed])
    return (
        <Column>
        {isConfirmed ? (
            <p>Thank you, your order has been confirmed. You will be directed to the homepage in {timeRemaining} seconds...</p>
        ) : (
            <Column>
            <h2>User Info</h2>
            <CartItemsList/>
            <Row style={{justifyContent:"center"}}>
                <ConfirmModal 
                label="Confirm Order"
                setIsConfirmed={setIsConfirmed}/>
                <button onClick={()=> navigate("/")}>Continue Shopping</button>
            </Row>
            </Column>
        )}
        </Column>
    )
};