import React from "react";
import ProductList from "../Data";
import { useParams, useHistory, Link } from "react-router-dom";
import Error from "./Error";
import About from "../components/About";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";

import { addToCart } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux'

const SingleProduct = () => {

  const products_state = useSelector((state)=> state)
  const dispatch = useDispatch()

  const { id } = useParams();
  const prevUrl = useHistory();

  const productCategory = prevUrl.location.pathname.split("/")[1];
  const products = ProductList[productCategory];

  let cuurentProduct = null;
  products.forEach((product) => {
    if (product.id === parseInt(id)) cuurentProduct = product;
  });
  
  // if id not present in the collection!
  if (cuurentProduct == null) {
    return <Error />;
  } 
  
  else {
    const { name, description, in_the_box, price, features, id } = cuurentProduct;
    return (
      <>
        <section className="item container">
          <Link to="/">Go Back</Link>
          <br />
          <img className="item--image" alt={name} />
          <div className="item__text">
            <div className="item--heading">{name}</div>
            <div className="item--description">{description}</div>
            <div className="item--price">Rs.{price}</div>
            <div className="item--btn">
              <span className="item--counter">{}</span>
              <span className="btn btn--add-to-cart" onClick={()=>dispatch(addToCart(productCategory, id, products_state))}>Add to Cart</span>
            </div>
          </div>
          <div className="item__features">{features}</div>
          <div className="item__in-box">
            {in_the_box.map((arr, index) => {
              return (
                <div key={index}>
                  <span>{arr[1]}</span>
                  <span>x</span>
                  <span>{arr[0]}</span>
                </div>
              );
            })}
          </div>
          {/* item images */}
        </section>
        <div className="products-category__cards">
          <CategoryCard productCategory={"headphones"} number={1} />
          <CategoryCard productCategory={"speakers"} number={2} />
          <CategoryCard productCategory={"earphones"} number={3} />
        </div>
        <About />
        <Footer />
      </>
    );
  }
};

export default SingleProduct;
