import React from "react";
import "./CartWidget.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CartWidget = () => {
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
        <i class="bi bi-cart4"></i>
        <span className="count-products">3</span>
      </button>
    </div>
  );
};

export default CartWidget;
