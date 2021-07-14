import React from 'react'
import RenderProducts from '../components/RenderProducts'
import ProductList from '../Data'

const Earphone = () => {

    const {earphones} = ProductList
    return (
        <RenderProducts products={earphones} productCategory={"earphones"} />
    )
}

export default Earphone
