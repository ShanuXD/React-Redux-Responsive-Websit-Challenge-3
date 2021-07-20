import React from "react";
import { Link } from "react-router-dom";

import imageData from "../images";

const RenderProducts = ({ products, productCategory }) => {
  return (
    <>
      <div className="all-products--title">{productCategory}</div>
      <section className="all-products container">
        {products.map((product, index) => {
          const { id, name, description } = product;
          const isReverse = Math.ceil(index % 2 === 0);
          return (
            <div
              key={index}
              className={`single-product ${isReverse ? "reverse" : ""}`}
            >
              <img
                className="single-product--image"
                src={`${imageData[name][0]}`}
                alt={name}
              />
              <div className="single-product__text-box">
                {index === 0 && <div className="alert-text">new product</div>}
                <div className="single-product--heading heading-text">
                  {name}
                </div>
                <div className="single-product--sub-heading">{description}</div>
                <Link
                  to={`/${productCategory}/${id}`}
                  className="single-product--btn btn"
                >
                  see products
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default RenderProducts;
