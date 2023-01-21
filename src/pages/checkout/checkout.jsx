import React, { useContext, useState } from "react";
import "./checkout.css";
import { firebaseServices } from "../../services/firebase";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";



const { createOrder } = firebaseServices;

const Checkout = () => {
    const navigate = useNavigate();
  const { cart, total,setCart } = useContext(CartContext);
  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const onHandleChange = (event, field) => {
    const { value } = event.target;
    setCustomer({
      ...customer,
      [field]: value,
    });
  };

  const onHandlerOrder = async () => {
    const newOrder = {
      buyer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
     
      },
      createdAt: new Date(),
     
      items: cart,
      payment: {
        currency: "USD",
        method: "cash",
        type: "cash",
      },
   
      total: total,
    };
    createOrder(newOrder);
    setCart([])
    navigateHome()
  };
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="check-container">
      <div className="check-form-container">
        <div className="row">
          <div className="form-group col-sm-12 col-md-5">
            <label className="label-check" for="name">
              Nombre
            </label>
            <input
              type="text"
              className=" input-check"
              id="name"
              placeholder="Nombre"
              onChange={(e) => onHandleChange(e, "name")}
              value={customer.name}
            />
          </div>
          <div className="form-group col-sm-12 col-md-5">
            <label className="label-check" for="lastName">
              Apellido
            </label>
            <input
              type="text"
              className=" input-check"
              id="lastName"
              placeholder="Apellido"
              onChange={(e) => onHandleChange(e, "lastName")}
              value={customer.lastName}
            />
          </div>
          <div className="form-group col-sm-12 col-md-5">
            <label className="label-check" for="email">
              Correo
            </label>
            <input
              type="email"
              className=" input-check"
              id="email"
              placeholder="Correo"
              onChange={(e) => onHandleChange(e, "email")}
              value={customer.email}
            />
          </div>
          <div className="form-group col-sm-12 col-md-5">
            <label className="label-check" for="phone">
              Telefono
            </label>
            <input
              type="number"
              className=" input-check"
              id="phone"
              placeholder="Telefono"
              onChange={(e) => onHandleChange(e, "phone")}
              value={customer.phone}
            />
          </div>
        </div>
        <div className="button-container-comprar">
          <button className="btn btn-comprar" onClick={onHandlerOrder}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
