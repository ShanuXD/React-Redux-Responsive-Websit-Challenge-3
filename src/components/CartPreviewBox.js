import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, increase, decrease } from "../redux/action";
import {cartImage} from "../images"

const CartPreviewBox = ({ closeMenu, products_state }) => {
  const products_in_cart = products_state.products;
  const total_cost = products_state.total;
  const dispatch = useDispatch();
  console.log(products_in_cart);
  return (
    <div className="cart-box cart-box__container">
      <div className="close--cart-box" onClick={closeMenu}><span>X</span></div>
      <div className="product-in-cart">
        {products_in_cart.length > 0 ? (
          <>
            <div className="product-in-cart__header">
              <span className="total-products">
                cart({products_in_cart.length})
              </span>
              <span
                className="remove-all"
                onClick={() => dispatch(clearCart())}
              >
                Remove All
              </span>
            </div>
            <div className="product-in-cart__body">
              {products_in_cart.map((product, index) => {

                  const {name, quantity, price} = product

                return (
                  <div key={index} className="single-product">
                    <div className="body__details">
                      <img src={cartImage[name]} alt={cartImage[name]} />
                      <div className="text">
                        <div className="title">{name}</div>
                        <div className="price">{price}</div>
                      </div>
                    </div>
                    <div className="body__btns">
                      <span className="decrease" onClick={()=>dispatch(decrease(product))}>-</span>
                      <span className="quantity">{quantity}</span>
                      <span className="increase" onClick={()=>dispatch(increase(product))}>+</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="product-in-cart__cost">
              <span className="text">Total</span>
              <span className="price">Rs {total_cost}</span>
            </div>
            <Link to="/checkout" className="btn" onClick={closeMenu}>
              CHECKOUT
            </Link>
          </>
        ) : (
          <div className="product-in-cart__empty">
            <div className="text">Your Cart is Empty</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPreviewBox;
