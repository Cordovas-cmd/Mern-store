import { useContext } from "react";
import {Column} from "./Column";
import {Image} from "./Image";
import {Row} from "./Row";
// import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { updateItemInCart } from "../utils/cartManagement"


export const ProductCard = ({ product }) => {


    const [cartItems, setCartItems] = useContext(CartContext)
    // destructure the object
    const { id, title, alt, imageSource, price, availability,} = product;

    return (
        <Column
        style={{
            width: "30%",
            height: "400px",
            margin: "8px",
            padding: "8px",
            border: "2px solid lightgray",
            borderRadius:  "8px",

        }}>
        <Image src={ imageSource} alt= {alt} title={title} />
        <h3>{title}</h3>
        <Row>
            <h4>${price}</h4>
            {!availability && (<p style={{ color:"red", fontStyle:"italic" }}>Out of Stock</p>)}
        </Row>
        <button 
        // update with previous items and new product. pass setCartItems the previous state (pre)
        onClick={()=> setCartItems((pre) => updateItemInCart("add", product, pre))}
        disabled={!availability}>Add to Cart 🛒</button>
        </Column>
    )
}