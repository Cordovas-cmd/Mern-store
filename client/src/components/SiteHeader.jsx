import { useContext } from "react"
// import { CartContext } from "../context/CartProvider"
import { CurrentUserContext } from "../context/CurrentUserProvider";
import {Column} from "./Column";
import { LogIn } from "./LogIn";
import {Row} from "./Row";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";

export const SiteHeader = ()=> {
    const [currentUser, ,setToken] = useContext(CurrentUserContext)
    // const [cartItems] = useContext(CartContext)
    // const numberOfItems = cartItems.length || 0;
    
    return (
        <Column>
        <Row>
        <h1>Ecommerce App</h1>
        <Row>
            {/* <button>🛒{numberOfItems}</button> */}
            <ViewCart />
            {/* if we have a current user change buttons to render sign out, when sign out is click, change token to null */}
        {currentUser ? (
        <button onClick={()=> setToken(null)}>Sign Out</button>
        ) : (
        <>
        <SignUp />
        <LogIn />
        </>
        )}
        </Row>
        </Row>
        </Column>
    )
}