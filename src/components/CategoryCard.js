import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ productCategory, number }) => {


  return (
    <div className="product-card container">
      <Link to={`/${productCategory}`} className="card">
        <div className={`image-${number}`}></div>
        <span className="title">{productCategory}</span>
        <span className="btn-shop">
          <span  className="btn-shop-link">
            Shop
          </span>
          <span className="arrow-icon"></span>
        </span>
      </Link>
    </div>
  );
};

export default CategoryCard;
