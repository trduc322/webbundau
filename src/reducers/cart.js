import * as Types from "../constants/ActionTypes.js"
var data = JSON.parse(localStorage.getItem('CART'));


var initialState = data ? data : [];

const cart = (state = initialState, action) =>{
    var {product, quantity} = action;
    var index = -1;
    switch(action.type){
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.INC_TO_CART:
            index = findProductInCart(state, product);
            state[index].quantity += 1;
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        case Types.DEC_TO_CART:
            index = findProductInCart(state, product);
            if(state[index].quantity > 1){
            state[index].quantity -= 1;
            }
            if(state[index].quantity === 1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        default : return [...state];
    }
}

var findProductInCart = (cart, product)  => {
    var index = -1;
    if(cart.length > 0){
        for(var i =0; i < cart.length ; i++){
            if(cart[i].product.iD_ThucPham  === product.iD_ThucPham){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;
