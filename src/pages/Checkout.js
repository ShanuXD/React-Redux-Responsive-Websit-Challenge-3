import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/action";
import Footer from "../components/Footer";
import { cartImage } from "../images";

const Checkout = () => {
  const dispatch = useDispatch();
  const {products, total} = useSelector((state) => state);
  const shippingCharge = 500
  const vatCharge = 1500
  const grandTotal = shippingCharge+ vatCharge+ total

  const onPurchase = ()=>{
    dispatch(clearCart())
  }



  if (products.length === 0) {
    return (
      <>
        <div className="empty-cart">
          <h1>Cart is Empty</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="checkout container">
        <Link to="/">Go Back</Link>
        <br />
        <div className="checkout__deatials">
          <h1>Checkout</h1>
          <form className="checkout__form">
            <div className="checkout-box">
              <div className="checkout--billing-details">
                <h5>Billing Details</h5>
                <div className="name">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Shantanu Mahato"
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Shanu@gmail.com"
                  />
                </div>
                <div className="phone">
                  <label htmlFor="phone">Phone Number</label>
                  <br />
                  <input
                    id="phone"
                    type="tel"
                    name="email"
                    placeholder="121-555-7878"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </div>
              </div>
              <div className="checkout--shipping-info">
                <h5>Shipping Info</h5>
                <div className="address">
                  <label htmlFor="address">Address</label>
                  <br />
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="62511 Whitefeild Banglore"
                  />
                </div>
                <div className="zip-code">
                  <label htmlFor="zip-code">Zip code</label>
                  <br />
                  <input
                    id="zip-code"
                    type="number"
                    name="email"
                    placeholder="10001"
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label>
                  <br />
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Bangalore"
                  />
                </div>
                <div className="country">
                  <label htmlFor="country">Country</label>
                  <br />
                  <input
                    id="country"
                    type="text"
                    name="country"
                    placeholder="India"
                  />
                </div>
              </div>
              <div className="checkout--payment-details">
                <h5>Payment Details</h5>
                {/* payment methood --> e-money, cash on delivery select only one */}
                {/* if e money got selected */}
                {/* e-money/num */} {/*e-money-Pin*/}
                <div className="e-money-number">
                  <label htmlFor="e-money-number">e-Money number</label>
                  <br />
                  <input
                    id="e-money-number"
                    type="text"
                    name="e-money-number"
                    placeholder="India"
                  />
                </div>
                <div className="e-money-pin">
                  <label htmlFor="e-money-pin">e-Money PIN</label>
                  <br />
                  <input
                    id="e-money-pin"
                    type="text"
                    name="e-money-pin"
                    placeholder="India"
                  />
                </div>
              </div>
            </div>

            <div className="checkout-summary">
              <h2 className="checkout-summary--title">Summary</h2>
              <div className="checkout-summary__items">
                {products.map((product, index) => {
                  const { name, price, quantity } = product;
                  return (
                    <div className="item" key={index}>
                      <div className="item--info">
                        <img src={cartImage[name]} alt={name} />
                        <div className="text">
                          <div className="name">{name}</div>
                          <div className="price">{price}</div>
                        </div>
                      </div>
                      <div className="item--quantity">
                        x <span>{quantity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

                <div className="checkout-summary__total-cost">
                  <div className="total">
                    <span>Total</span>
                    <span>{}</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>Rs {shippingCharge}</span>
                  </div>
                  <div className="total">
                    <span>Vat (Included)</span>
                    <span>Rs {vatCharge}</span>
                  </div>
                  <div className="grand-total">
                    <span>Grand Total</span>
                    <span>{grandTotal}</span>
                  </div>
                </div>


              <div className="checkout__btn">
                <span
                  className="btn btn-buy"
                  onClick={onPurchase}>
                  Continue & Pay
                </span>
              </div>
            </div>

          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
