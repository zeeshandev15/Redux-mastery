import { combineReducers } from "@reduxjs/toolkit";
import customerReducer from "../redux/slices/customerSlice";
import productReducer from "../redux/slices/productSlice";

const rootReducer = combineReducers({
  customers: customerReducer,
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
