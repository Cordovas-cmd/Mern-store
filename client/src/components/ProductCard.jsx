import {Column} from "./Column";
import {Image} from "./Image";
import {Row} from "./Row";



export const ProductCard = ({ product }) => {

    // destructure the object
    const { id, title, alt, imageSource, price, availability,} = product;

    return (
        <Column>
        <Image src={ imageSource} alt= {alt} title={title} />
        <h3>{title}</h3>
        <Row>
            <h4>${price}</h4>
            {!availability && (<p style={{ color:"red", fontStyle:"italic" }}>Out of Stock</p>)}
        </Row>
        <button disabled={!availability}>Add to Cart 🛒</button>
        </Column>
    )
}