import React, { useContext, useState } from "react";
import "./cart.css";
import CartItem from "../../components/cartItem/cartItem";
import { Link } from "react-router-dom";
import { firebaseServices } from "../../services/firebase";
import { CartContext } from "../../context/cartContext";

const { createOrder } = firebaseServices;

const Cart = () => {
  const { onRemoveItem, cart, total } = useContext(CartContext);
  const [orderResult, setOrderResult] = useState();

  const onHandlerOrder = async () => {
    const newOrder = {
      buyer: {
        name: "Juan",
        email: "juan@gmail.com",
        phone: "123456789",
        shippingMethod: "delivery",
        address: "Calle falsa 123",
      },
      createdAt: new Date(),
      id: 1,
      items: cart,
      payment: {
        currency: "USD",
        method: "cash",
        type: "cash",
      },
      seller: {
        id: 1,
        name: "Pepito",
        phone: "123456789",
        email: "adwda@gmail.com",
      },
      shipping: {
        deliveryDate: new Date() + 7,
        trackingNumber: "123456789",
        type: "delivery",
      },
      total: total,
    };
    const result = await createOrder(newOrder);
    setOrderResult(result);
  };

  console.log("orderResult", orderResult);
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
            <div className="button-container-comprar">
              <button
                type="button"
                className=" btn btn-comprar"
                onClick={onHandlerOrder}
              >
                Comprar
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
