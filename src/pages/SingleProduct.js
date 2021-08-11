import React, { useState, useEffect } from "react";
import ProductList from "../Data";
import { useParams, useHistory, Link } from "react-router-dom";
import Error from "./Error";
import About from "../components/About";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import SuggestionCard from "../components/SuggestionCard";

// Redux
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

// Product Images
import ImageData from "../images";

const getRandomProperty = (obj) => {
  const keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};
const getRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const SingleProduct = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const prevUrl = useHistory();
  const productCategory = prevUrl.location.pathname.split("/")[1];
  const products = ProductList[productCategory];
  
  let currentProduct = null;
  products.forEach((product) => {
    if (product.id === parseInt(id)) currentProduct = product;
  });

  useEffect(()=>{
    setSelectedItem(1)
  },[currentProduct])


  // if id not present in the collection!
  if (currentProduct == null) {
    return <Error />;
  } else {
    const { name, description, in_the_box, price, features, id } =
      currentProduct;

    let suggestionProducts = [];
    const findSuggestions = () => {
      const suggestion=[]
      while (suggestionProducts.length < 3) {
        const category = getRandomProperty(ProductList);
        const randomProduct = getRandomValue(ProductList[category])
        if(randomProduct.name !== currentProduct.name &&
           !suggestion.includes(randomProduct.name)){
          // console.log(randomProduct.name)
          suggestion.push(randomProduct.name)
          suggestionProducts.push({name:randomProduct.name, id:randomProduct.id, category:category })
        }
      }
    };
    findSuggestions()

    return (
      <>
        <div className="container">
          <Link className="btn-go-back" to={`/${productCategory}`}>
            Go Back
          </Link>
          <section className="item ">
            <br />
            <img
              className="item--image"
              alt={name}
              src={`${ImageData[name][0]}`}
            />
            <div className="item__text">
              {id === 1 && (
                <div
                  className="alert-text"
                  style={{
                    color: "#d87c49",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  new product
                </div>
              )}
              <div className="item--heading">{name}</div>
              <div className="item--description">{description}</div>
              <div className="item--price">Rs.{price}</div>
              <div className="item--btn">
                <span className="item--counter disable-select">
                  <span
                    className="left"
                    onClick={() =>
                      setSelectedItem((prev) => {
                        if (prev === 1) return prev;
                        return prev - 1;
                      })
                    }
                  >
                    -
                  </span>
                  <span className="value">{selectedItem}</span>
                  <span
                    className="right"
                    onClick={() =>
                      setSelectedItem((prev) => {
                        if (prev === 10) return prev;
                        return prev + 1;
                      })
                    }
                  >
                    +
                  </span>
                </span>
                <span
                  className="btn btn--add-to-cart"
                  onClick={() =>
                    dispatch(addToCart(productCategory, id, selectedItem))
                  }
                >
                  Add to Cart
                </span>
              </div>
            </div>
            <div className="item__features">
              <h1>FEATURES</h1>
              <div className="item__features--text">{features}</div>
            </div>
            <div className="item__in-box">
              <h1>IN THE BOX</h1>
              <div className="item__in-box--text">
                {in_the_box.map((arr, index) => {
                  return (
                    <div key={index}>
                      <span className="number">{arr[1]}x</span>
                      <span>{arr[0]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {ImageData[name].length > 1 && (
              <div className="item__product-images">
                {ImageData[name]
                  .slice(1, ImageData.length)
                  .map((image, index) => {
                    return (
                      <img
                        key={index}
                        className={`image image-${index + 1}`}
                        src={image}
                        alt={`${name}-${index}`}
                      />
                    );
                  })}
              </div>
            )}
          </section>
          <div className="suggestion">
            <h1>You May Also Like</h1>
            <div className="suggestion-cards">
            {suggestionProducts.map((productName, index)=>{
              const {id, name, category} = productName
              return <SuggestionCard key={index} name={name} id={id} category={category}/>
            })}
            </div>
          </div>
          <div className="products-category__cards">
            <CategoryCard productCategory={"headphones"} number={1} />
            <CategoryCard productCategory={"speakers"} number={2} />
            <CategoryCard productCategory={"earphones"} number={3} />
          </div>
          <About />
        </div>
        <Footer />
      </>
    );
  }
};

export default SingleProduct;
