
import './App.css'
import {Column} from "./components/Column";
import {SiteHeader} from "./components/SiteHeader";
import {sampleProductsList} from "./assets/sampleProducts";
import { ProductCard } from './components/ProductCard';

function App() {


  return (
    <>
     <Column>
     <SiteHeader />
     {sampleProductsList.map((p=> <ProductCard key={p.id  + p.title}product={p}/> ))}
     </Column>
    </>
  )
}

export default App
