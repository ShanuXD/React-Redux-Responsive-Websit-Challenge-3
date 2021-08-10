import {INCREASE, DECREASE, ADD_TO_CART, CLEAR_FROM_CART,} from "./actionTypes"

 const reducer=(state, action)=>{

    if(action.type === ADD_TO_CART){
        const current_product = action.payload
        const products_in_state = state.products

        for (let key in products_in_state){
            if(products_in_state[key].name === current_product.name){
                console.log('same product inserted!', products_in_state[key].quantity)
                products_in_state[key].quantity += current_product.quantity

                return {...state,products: products_in_state}
            }
        }
        const new_products = [...state.products, current_product]
        const total = calculateTotal(new_products)
        return {...state,products: new_products, total:total}  //  changeing the type from array to object!
    }

    if(action.type === CLEAR_FROM_CART){
        return {products:[], total:0}
    }

    if(action.type === INCREASE){
        // console.log("Increse")
        const products = state.products
        const currentProduct = action.payload
        products.forEach((product)=>{
            if(product.name === currentProduct.name){
                product.quantity+=1
            }
        })

        const total = calculateTotal(products)
        return {...state,products: products, total:total}
    }
    if(action.type === DECREASE){
        // console.log("decrese")
        let products = state.products
        const currentProduct = action.payload
        let isZero = false
        let removeIndex = -1

        products.forEach((product, index)=>{
            if(product.name === currentProduct.name && product.quantity===1){
                isZero = true
                removeIndex = index
                console.log(isZero, removeIndex)
            }
        })

        if(isZero){
            products = products.filter((product, index)=>index!==removeIndex)
        }else{
            products.forEach((product)=>{
                if(product.name === currentProduct.name){
                    product.quantity-=1
                }
            })
        }

        const total = calculateTotal(products)
        return {...state,products: products, total:total}
    }


    return state
}

function calculateTotal(products) {
    let total = 0
    products.forEach(product=>{
        total += product.quantity*product.price
    })

    return total
    
}


export default reducer


