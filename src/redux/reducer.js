import {INCREASE, DECREASE, ADD_TO_CART, CLEAR_FROM_CART} from "./actionTypes"

 const reducer=(state, action)=>{

    if(action.type === ADD_TO_CART){
        const current_product = action.payload
        const new_products = [...state.products, current_product]
        // console.log(new_products) 
        // {products: [...state.products, current_product]} ==>{products:{...}}
        //  changeing the type from array to object!
        return {products: new_products}
    }
    if(action.type === INCREASE){
        console.log("Increse")
    }
    if(action.type === DECREASE){
        console.log("decrese")
    }
    if(action.type === CLEAR_FROM_CART){
        return {products:[]}
    }


    return state

}
export default reducer