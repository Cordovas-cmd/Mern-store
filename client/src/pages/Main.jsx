import {Row} from "../components/Row";
import { ProductCard } from "../components/ProductCard";
import { sampleProductsList } from "../assets/sampleProducts";


export const Main = () => {
    return (
        <Row style={{flexWrap: "wrap"}}>
        {sampleProductsList.map((p=> <ProductCard key={p.id  + p.title}product={p}/> ))}
        </Row>
    )
}