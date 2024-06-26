
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
import { AddProduct } from "./pages/AddProduct";


// need to auth email and validate test entry
// need to rate products
// need to add to wishlist


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
        <Route path="/add-product" element={<AddProduct />} />

       </Routes>
       </Column>
     </Router>
    </>
  )
}

export default App
