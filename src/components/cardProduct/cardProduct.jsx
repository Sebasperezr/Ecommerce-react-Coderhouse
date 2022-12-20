import React from "react";
import "./cardProduct.css";

const CardProduct = ({ product, onSelect }) => {
  return (
    <div className="card">
      <div onClick={() => onSelect(product)}>
        <div className="container-image">
          <img className="image" src={product.image} alt={product.name} />
        </div>

        <div className="card-body">
          <div className="content-title">
            <h3 className="card-title">{product.name}</h3>
          </div>
          <div className="content-price">
            <p className="card-price">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
