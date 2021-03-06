import * as types  from './../constants/ActionType'
var initialState = [];

var findIndex = (products,id) =>{
    var result = -1;
    products.forEach((product,index)=>{
        if(product.id === id)
            result = index;
    })
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index,1);
            return [...state];
        case types.ADD_PRODUCT:
            index = findIndex(state, action.product.id);
            if(index===-1){
                state.push(action.product);
            }
            return [...state]
        case types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            if(index!==-1){
                state[index] = action.product;
            }
            return[...state]
        default: return state;
    }
}
export default products; 