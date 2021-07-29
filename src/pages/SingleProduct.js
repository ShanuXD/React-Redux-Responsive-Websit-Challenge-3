import React, {useState} from "react";
import ProductList from "../Data";
import { useParams, useHistory, Link } from "react-router-dom";
import Error from "./Error";
import About from "../components/About";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";

// Redux
import { addToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

// Product Images
import ImageData from "../images";
import imagesData from "../images";

const SingleProduct = () => {
  const [selectedItem, setSelectedItem] = useState(1)

  const products_state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const prevUrl = useHistory();

  const productCategory = prevUrl.location.pathname.split("/")[1];
  const products = ProductList[productCategory];

  let currentProduct = null;
  products.forEach((product) => {
    if (product.id === parseInt(id)) currentProduct = product;
  });

  // if id not present in the collection!
  if (currentProduct == null) {
    return <Error />;
  } else {
    const { 
      name, 
      description, 
      in_the_box, 
      price, 
      features, 
      id } =
      currentProduct;
  
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
            {id === 1 && <div className="alert-text" style={{color:"#d87c49", fontSize:"16px", marginBottom:"10px"}}>new product</div>}
            <div className="item--heading">{name}</div>
            <div className="item--description">{description}</div>
            <div className="item--price">Rs.{price}</div>
            <div className="item--btn" >
              <span className="item--counter disable-select">
                <span className="left" onClick={()=>setSelectedItem(prev=>{
                  if(prev===1)return prev
                  return prev-1
                }) }>-</span>
                <span className="value">{selectedItem}</span>
                <span className="right" onClick={()=>setSelectedItem(prev=>{
                  if(prev===10)return prev
                  return prev+1
                }) }>+</span>
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
          {imagesData[name].length>1&&( 
            <div className="item__product-images">
              {imagesData[name].slice(1,imagesData.length).map((image, index)=>{
                return <img 
                 key={index}
                 className={`image image-${index+1}`}
                 src={image} 
                 alt={`${name}-${index}`} />
              })}
            </div>
          )}
        </section>
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
