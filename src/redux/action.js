import Data from "../Data"
import {ADD_TO_CART, CLEAR_FROM_CART, INCREASE, DECREASE} from "./actionTypes"

export const addToCart = (category, id, state)=>{

    // console.log(category, id, state)
    const products = Data[category]
    const currentProduct = products.find(product=>product.id===id)

    return {
        type: ADD_TO_CART,
        payload: currentProduct
    }
}

export const clearCart = ()=>{
    return {
        type:CLEAR_FROM_CART
    }
}

export const increase = (product)=>{
    return {
        type: INCREASE,
        payload: product
    }
}
export const decrease = (product)=>{
    return {
        type: DECREASE,
        payload: product
    }
}
