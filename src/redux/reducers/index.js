import { combineReducers } from "redux";
import { productReducer,selectedReducer } from "./productReducer";

const reducers = combineReducers({
    allProduct:productReducer,
    product:selectedReducer
});
export default reducers;