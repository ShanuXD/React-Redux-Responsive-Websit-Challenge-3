import React, {useRef} from "react";
import { Link } from "react-router-dom";
import CartPreviewBox from './CartPreviewBox'

import { useSelector } from "react-redux";

const Navbar = () => {

  const products_state = useSelector((state) => state);
  const overlayRef = useRef(null)

  const handelMenu = ()=>{
    if(overlayRef.current.classList.contains("overlay")){
      overlayRef.current.classList.remove("overlay")
      overlayRef.current.classList.add("hide-cartbox")
      document.body.style.overflowY="scroll"
    }
    else{
      overlayRef.current.classList.add("overlay")
      overlayRef.current.classList.remove("hide-cartbox")
      document.body.style.overflowY="hidden"
    }
  }

  const closeMenu = ()=>{
    handelMenu()
  }

  return (
    <header className="header">
      <div ref={overlayRef} className="hide-cartbox">
        <CartPreviewBox closeMenu={closeMenu} products_state={products_state} />
      </div>
      <nav className="navbar container">
        <div className="navbar__logo">
          <Link className="icon" to="/"></Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="navbar--link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/headphones">
              Headphone
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/speakers">
              Speakers
            </Link>
          </li>
          <li>
            <Link className="navbar--link" to="/earphones">
              Earphones
            </Link>
          </li>
        </ul>
        <div className="cart-icon">
          <span onClick={handelMenu} className="icon" to="/checkout"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
