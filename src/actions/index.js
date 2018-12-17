import * as type from './../constants/ActionType'
import callApi from './../utils/ApiCaller'

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products','GET',null).then(res =>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) =>{
    return{
        type: type.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res =>{
            dispatch(actDeleteProducts(id))
        })
    }
}

export const actDeleteProducts = (id) =>{
    return{
        type: type.DELETE_PRODUCT,
        id
    }
}

export const actAddProductsRequest = (product) =>{
    return (dispatch) =>{
        return callApi('products','POST',{name:product.name,price:product.price,status:product.status}).then(res=>{
            dispatch(actAddProducts(res.data))
        })
    }
}

export const actAddProducts = (product) => {
    return{
        type: type.ADD_PRODUCT,
        product
    }
}

export const actGetProductsRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProducts(res.data))
        })
    }
}

export const actGetProducts = (product) => {
    return{
        type: type.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return(dispatch) =>{
        return callApi(`products/${product.id}`,'PUT', product).then(res=>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => {
    return{
        type: type.UPDATE_PRODUCT,
        product
    }
}