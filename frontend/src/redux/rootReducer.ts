import { combineReducers } from "@reduxjs/toolkit";
import customerReducer from "../redux/slices/customerSlice";
import productReducer from "../redux/slices/productSlice";
import postReducer from "../redux/slices/postSlice";

const rootReducer = combineReducers({
  customers: customerReducer,
  products: productReducer,
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
