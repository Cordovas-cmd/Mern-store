import { useNavigate } from "react-router-dom";
import { Column } from "../components/Column"
import { useState } from "react"
import { CartItemsList } from "../components/CartItemsList";
import { Row } from "../components/Row"
import { ConfirmModal } from "../components/ConfirmModal";
// want to view a summary of my order, a confirmation button as well as my information. 

export const CheckOut = () => {
    // check if order has been confirmed
    const [isConfirmed, setIsConfirmed] = useState(false);

    const navigate= useNavigate();
    return (
        <Column>
        {isConfirmed ? (
            <p>Thank you, your order has been confirmed</p>
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