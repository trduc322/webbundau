import * as Types from '../constants/ActionTypes.js'


export const actAddToCart = (product, quantity) => {
    return{
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) => {
    return{
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actIncToCart = (product,quantity) => {
    return{
        type : Types.INC_TO_CART,
        product,
        quantity
    }
}
export const actDecToCart = (product,quantity) => {
    return{
        type : Types.DEC_TO_CART,
        product,
        quantity
    }
}

