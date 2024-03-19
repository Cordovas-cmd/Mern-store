// import { useContext } from "react"
// import { CartContext } from "../context/CartProvider"
import {Column} from "./Column";
import { LogIn } from "./LogIn";
import {Row} from "./Row";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";

export const SiteHeader = ()=> {
    // const [cartItems] = useContext(CartContext)
    // const numberOfItems = cartItems.length || 0;
    
    return (
        <Column>
        <Row>
        <h1>Ecommerce App</h1>
        <Row>
            {/* <button>🛒{numberOfItems}</button> */}
            <ViewCart />
            <SignUp />
            <LogIn />
        </Row>
        </Row>
        </Column>
    )
}