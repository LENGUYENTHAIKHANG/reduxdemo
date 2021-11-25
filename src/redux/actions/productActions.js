import {ActionsTypes} from '../contants/actions-types'
export const setProduct=(products)=>{
    return{
        type: ActionsTypes.SET_PRODUCTS,
        payload:products,
        }
};
export const selectedProduct=(product)=>{
    return{
        type: ActionsTypes.SELECTED_PRODUCTS,
        payload:product,
        }
}