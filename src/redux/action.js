import Data from "../Data"
import {ADD_TO_CART, CLEAR_FROM_CART, INCREASE, DECREASE,} from "./actionTypes"

export const addToCart = (category, id, quantity)=>{
    const products = Data[category]

    const currentProduct = products.find(product=>product.id===id)
    const currentProducDeatails = {
        name:currentProduct.name,
        category: category,
        quantity: quantity,
        price: currentProduct.price
    }

    return {
        type: ADD_TO_CART,
        payload: currentProducDeatails
    }
}

export const clearCart = ()=>{
    return {
        type:CLEAR_FROM_CART
    }
}

export const increase = (product)=>{

    console.log(product.name)

    return {
        type: INCREASE,
        payload: product
    }
}
export const decrease = (product)=>{
    console.log(product.name)
    return {
        type: DECREASE,
        payload: product
    }
}


