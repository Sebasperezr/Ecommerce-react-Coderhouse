import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/cart.jsx";
import ItemDetailContainer from "../pages/itemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from '../pages/itemListContainer/ItemListContainer.jsx';



const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
} 

export default Router;