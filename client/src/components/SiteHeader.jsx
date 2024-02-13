import {Column} from "./Column"
import {Row} from "./Row"

export const SiteHeader = ()=> {
    
    
    return (
        <Column>
        <Row>
        <h1>Ecommerce App</h1>
        <Row>
            <button>🛒</button>
            <button>Sign Up</button>
            <button>Log In</button>
        </Row>
        </Row>
        </Column>
    )
}