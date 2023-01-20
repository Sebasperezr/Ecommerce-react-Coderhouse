import React, { useContext } from "react";
import "./CartWidget.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="content">
      <button
        className="cart-widget-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <i className="bi bi-cart4"></i>
        <span className="count-products">{cart.length}</span>
      </button>
    </div>
  );
};

export default CartWidget;
