import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ productCategory, number }) => {


  return (
    <div className="product-card container">
      <div className="card">
        {/* <img
          src={"../assets-image/shared/imageearphones.png"}
          alt={productCategory}
        /> */}
        <div className={`image-${number}`}></div>
        <span className="title">{productCategory}</span>
        <span className="btn-shop">
          <Link to={`/${productCategory}`} className="btn-shop-link">
            Shop
          </Link>
          <span className="arrow-icon"></span>
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
