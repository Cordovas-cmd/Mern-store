import { Row } from "./Row"

// get props from cart items list
export const CartItem = ({index,item}) => {
    return(
        <>
        <p style={{textAlign:"right"}}>{index + 1}</p>
        <p style={{textAlign:"left"}}>{item.title}</p>
        <p style={{textAlign:"left"}}>${item.price}</p>
        <Row>
            <button>➖</button>
            <p style={{textAlign:"center"}}>${item.count}</p>
            <button>➕</button>
        </Row>
        <button>✖</button>
        </>
    )
}