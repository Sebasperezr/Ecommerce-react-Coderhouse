import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CardProduct from "../../components/cardProduct/cardProduct.jsx";
import { URL_BASE, URL_ENDPOINTS } from "../../services/constants.js";
import { useFetch } from "../../hooks/useFetch.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams() || {};
  let idCategory = id === undefined ? 1 : id;
  const { state } = useLocation() || {};
console.log(state);
  const {
    data: products,
    error,
    loading,
  } = useFetch(
    `${URL_BASE}/${URL_ENDPOINTS.CATEGORY}/${idCategory}/${URL_ENDPOINTS.PRODUCTS}`
  );

  const onHandlerSelect = (product) => {
 
    navigate(`/item/${product.id}`, { state: product });
  };

  return (
    <div className="container">
      <div className="content-title">
        <h2 className="title">Productos</h2>
      </div>
      <div className="container-products">
        {products.map((product) => (
          <CardProduct
            product={product}
            key={product.name}
            onSelect={onHandlerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
