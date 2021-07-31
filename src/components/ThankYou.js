import React from 'react'
import { Link } from 'react-router-dom'
import { cartImage } from "../images";
import { useDispatch} from "react-redux";
import { clearCart } from "../redux/action";

const ThankYou = ({products, total, checkoutRef}) => {
    const numberOfProducts = products.length
    const {name, price} = products[0]
    const dispatch = useDispatch();

    const closeMenu =()=>{

        checkoutRef.current.classList.remove("overlay")
        checkoutRef.current.style.display="none"
        dispatch(clearCart())
    }

    return (
        <div className="thank-you">
            <div className="logo">
                <span className="checkmark">
                    <div className="checkmark_circle"></div>
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span>

            </div>
            <div className="heading">
            <h1 className="">Thank You</h1>
            <h1 className="">For Your order</h1>
            </div>
            
            <h5 className="text">You will recieve an email conformation shortly</h5>
            <div className="box">
                <div className="products">
                    <div className="product-detail">
                        <img src={cartImage[name]} alt={name} />
                        <div className="product-detail--text">
                            <h4 className="name">{name}</h4>
                            <h4 className="price">Rs {price}</h4>
                        </div>
                    </div>
                    <div className="product-quantity">
                        {numberOfProducts>1?`and ${numberOfProducts-1} other items`:null}
                    </div>
                </div>
                <div className="grand-total">
                    <h3>Grand Total</h3>
                    <span>Rs{total}</span>
                </div>
            </div>
            <Link onClick={closeMenu} className="btn thank-you--btn" to="/"> Back To Home</Link>
        </div>
    )
}

export default ThankYou
