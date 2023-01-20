import React, { useContext, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import CardProduct from "../../components/cardProduct/cardProduct.jsx";
import "./ItemListContainer.css";
import { CartContext } from "../../context/cartContext.jsx";
import { firebaseServices } from "../../services/firebase/index.js";

const { getProducts, getProductsByCategory } = firebaseServices;

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams() || {};
  let idCategory = id;
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    const getBDProducts = async () => {
      try {
        if (idCategory === undefined) {
          let allProducts = await getProducts();
          setProducts(allProducts);
        } else {
          onFilter(idCategory);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const onFilter = async (id) => {
      const filterByCategory = await getProductsByCategory(id);
      setProducts(filterByCategory);
    };
    getBDProducts();
  }, [idCategory, setProducts]);

 

  const onHandlerSelect = (product) => {
    navigate(`/item/${product.id}`, { state: product.id });
  };

  return (
    <div className="container">
      <div className="content-title">
        <h2 className="title">Productos</h2>
      </div>
      <div className="container-products">
        {products?.map((product) => (
          <CardProduct
            product={product}
            key={product?.name}
            onSelect={onHandlerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
