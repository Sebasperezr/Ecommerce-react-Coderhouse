import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/cart.jsx";
import ItemDetailContainer from "../pages/itemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from '../pages/itemListContainer/ItemListContainer.jsx';
import Home from "../pages/home/home.jsx";
import Checkout from "../pages/checkout/checkout.jsx";



const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
} 

export default Router;