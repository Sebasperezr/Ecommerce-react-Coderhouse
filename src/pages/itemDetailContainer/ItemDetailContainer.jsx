import React, { useContext, useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import {  useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { firebaseServices } from "../../services/firebase";
import {
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

const { getProductById } = firebaseServices;

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams() || {};

  const {
    onDecreaseItem,
    onIncreaseItem,
    getItemQuantity,
    products,
    setProducts,
  } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product[0]);
    });
  }, [id]);

  useEffect(() => {
    if(products.length === 0) {
        const db = getFirestore();
        const q = query(
            collection(db, 'products'), 
            );
        getDocs(q)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    setProducts((prev) => [...prev, doc.data()])
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}, [products.length, setProducts])


  return (
    <div className="container-detail">
      <div className="detail">
        <div className=" container-image-detail">
          <img
            className="image-detail"
            src={product?.image}
            alt={product?.name}
          />
        </div>
        <div className="container-desription-detail">
          <div className="desription-detail">
            <div className="content-title">
              <h3 className="detail-title">{product?.name}</h3>
            </div>
            <div className="content-price">
              <p className="detail-price">${product?.price}</p>
            </div>
            <div className="content-description">
              <p className="detail-description">{product?.description}</p>
            </div>

            <div className="card-button-container">
              <button
                disabled={getItemQuantity(product?.id) === 0}
                onClick={() => onDecreaseItem(id)}
                className="card-button-minus"
              >
                -
              </button>
              <input
                disabled
                className="card-input"
                type="text"
                value={getItemQuantity(product?.id)}
              />
              <button
                onClick={() => onIncreaseItem(id)}
                className="card-button-plus"
                disabled={getItemQuantity(product?.id) === product?.stock}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
