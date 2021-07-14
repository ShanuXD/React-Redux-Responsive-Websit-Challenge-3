import React from 'react'
import ProductList from "../Data";
import RenderProducts from '../components/RenderProducts'


const Headphone = () => {
    const {headphones} = ProductList
    return (
        <RenderProducts products={headphones} productCategory={"headphones"} />
    )
}

export default Headphone
