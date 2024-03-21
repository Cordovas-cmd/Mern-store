
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import {Column} from "./components/Column";
import {SiteHeader} from "./components/SiteHeader";
import {sampleProductsList} from "./assets/sampleProducts";
import { ProductCard } from './components/ProductCard';
import { Row } from "./components/Row"
import { CartItemsList } from './components/CartItemsList';
import { Main } from "./pages/Main"
import { CheckOut } from './pages/Checkout';
function App() {


  return (
    <>
     <Router>
       <Column>
       <SiteHeader />
       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/check-out" element={<CheckOut />}/>
       </Routes>
       </Column>
     </Router>
    </>
  )
}

export default App
