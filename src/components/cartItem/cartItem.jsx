import React from "react";
import "./cartItem.css";

const CartItem = ({ id, image, name, price, quantity, onRemoveProduct }) => {
  console.log(id);
  return (
    <div className="cart-container-detail">
      <div className="cart-detail row">
        <div className=" col-12 col-md-2">
          <img className="cart-image-detail" src={image} alt={name} />
        </div>
        <div className=" col-12 col-md-8">
          <div className="cart-desription-detail">
            <div className="cart-content-title">
              <h3 className="cart-detail-title">{name}</h3>
            </div>
            <div className="cart-content-price">
              <p className="cart-detail-price">Unidad ${price}</p>
              <p className="cart-detail-total-price">Total ${price * quantity}</p>
              <p className="cart-detail-quantity">Cant {quantity}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 d-flex justify-content-center">
          <button className="btn btn-delete" onClick={()=> onRemoveProduct(id)} >Eliminar </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
