import React from 'react'
import { Link,} from "react-router-dom";

const RenderProducts = ({products, productCategory}) => {

    return (
    <section className="products container">
      {products.map((product, index) => {
        const {id, name, features, description} = product
        return (
          <div key={index} className="card">
            <img src="YX1 EARPHONES" alt="" />
            <div className="tab__text">
              <div className="tab__text--heading">{name}</div>
              <div className="tab__text--sub-heading">
                {description}
              </div>
              <Link to={`/${productCategory}/${id}`} className="tab__text--btn btn btn--black">
                see products
              </Link>
            </div>
          </div>
        );
      })}
    </section>
    )
}

export default RenderProducts
