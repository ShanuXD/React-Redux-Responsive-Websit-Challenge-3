import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-category__cards">
        <CategoryCard productCategory={"headphones"} number={1} />
        <CategoryCard productCategory={"speakers"} number={2} />
        <CategoryCard productCategory={"earphones"} number={3} />
      </div>

      <div className="product__cards container">
        {/* Use Grid */}
        <ProductCard
          name={"ZX9 SPEAKER"}
          features={
            "Upgrade to premium speakers that are phenomenally build to deliver truly remarkable sound"
          }
          productCategory={"speakers"}
        />

        <div className="product-card--2 image">
          <div className="product-card__text">
            <div className="product-card__text--heading">ZX7 SPEAKER</div>
            <Link to="/speakers/2" className="btn btn--transparent">
              see products
            </Link>
          </div>
        </div>

        {/* tab 3 and 4 */}
        <div className="product-card--mix">
          <div className="product-card card--3 image"></div>

          <div className="product-card card--4">
            <div className="product-card__text">
              <div className="product-card__text--heading">YX1 Earphones</div>
              <Link to="/earphones/1" className="btn btn--transparent">
                see products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
