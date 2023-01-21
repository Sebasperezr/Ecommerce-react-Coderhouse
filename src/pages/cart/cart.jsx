import React, { useContext } from "react";
import "./cart.css";
import CartItem from "../../components/cartItem/cartItem";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const Cart = () => {
  const { onRemoveItem, cart, total } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className="content-title">
        {" "}
        <h2 className="title">Bienvenido a Morita</h2>
      </div>
      <div className="content-subtitle">
        {" "}
        <h3 className="subtitle">Tienda Virtual </h3>
      </div>
      <div className="content-cart-products">
        {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                onRemoveProduct={onRemoveItem}
              />
            ))}
            <div className="total-car-container">
              <p className="total-car">TOTAL ${total}</p>
            </div>
            <div className="button-container-comprar">
              <button
                type="button"
                className=" btn btn-comprar"
                onClick={navigateCheckout}
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <div>
            <div className="cart-footer-text">
              <h2>No ha seleccionado productos</h2>
            </div>
            <div>
              <Link to="/" className="footer-button-cart">
                Inicio
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
