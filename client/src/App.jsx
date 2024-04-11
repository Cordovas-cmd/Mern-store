
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
import { ViewOrders } from "./pages/ViewOrders";
function App() {


  return (
    <>
     <Router>
       <Column>
       <SiteHeader />
       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/orders" element={<ViewOrders />} />
        <Route path="/check-out" element={<CheckOut />}/>
       </Routes>
       </Column>
     </Router>
    </>
  )
}

export default App
