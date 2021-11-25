import {ActionsTypes} from '../contants/actions-types';

const initalState={
    products:[]
    ,
};
export const productReducer = (state= initalState,{type,payload})=>{
    switch(type){
        case ActionsTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}
export const selectedReducer = (state={},{type,payload})=>{
    switch (type) {
        case ActionsTypes.SELECTED_PRODUCTS:
            
            return{...state,...payload}
    
        default:
            
            return state;
    }
};