import React from "react";
import ProductList from "../Data";
import RenderProducts from '../components/RenderProducts'


const Speakers = () => {
  const {speakers} = ProductList;
  return (
    <RenderProducts products={speakers} productCategory={"speakers"} />
  );
};

export default Speakers;
