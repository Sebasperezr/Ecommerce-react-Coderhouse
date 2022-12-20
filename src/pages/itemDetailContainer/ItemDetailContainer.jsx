import React from "react";
import "./ItemDetailContainer.css";
import { useLocation } from "react-router-dom";

const ItemDetailContainer = () => {
  const { state: product } = useLocation() || {};

  console.log(product);
  return (
    <div className="container-detail">
      <div className="detail">
        <div className=" container-image-detail">
          <img
            className="image-detail"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="container-desription-detail">
          <div className="desription-detail">
            <div className="content-title">
              <h3 className="detail-title">{product.name}</h3>
            </div>
            <div className="content-price">
              <p className="detail-price">${product.price}</p>
            </div>
            <div className="content-description">
              <p className="detail-description">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
