import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({name, features, productCategory}) => {
  return (
    <div className="product-card">
     <div className="product-card__image"></div>
      <div className="product-card__text">
        <div className="product-card__text--heading">{name}</div>
        <div className="product-card__text--sub-heading">
          {features}
        </div>
        <Link to={`/${productCategory}/1`} className="btn btn--black">
          see products
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
