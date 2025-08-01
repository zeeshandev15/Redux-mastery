import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance";
import { Product } from "@/redux/slices/productSlice";

// createproduct
export const createProduct = createAsyncThunk(
  "create/product",
  async (formData: Omit<Product, "_id">, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.post(
        "api/products",
        formData
      );
      return result;
    } catch (error: any) {
      const errorMessage =
        error.response.data.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// getProducts
export const getProducts = createAsyncThunk(
  "get/products",
  async (_, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.get("api/products");
      return result;
    } catch (error: any) {
      const errorMessage =
        error.response.data.message || error.message || "Something went Wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// updateProducts
export const updateProducts = createAsyncThunk(
  "update/products",
  async ({ id, updateData }: { id: string; updateData: Product }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.put(
        `api/products/${id}`,
        updateData
      );
      return result;
    } catch (error: any) {
      const errorMessage =
        error.response.data.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// deleteProduct
export const deleteProduct = createAsyncThunk(
  "delete/product",
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.delete(`api/products/${id}`);
      return result;
    } catch (error: any) {
      const errorMessage =
        error.response.data.message || error.message || "Something Went Wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
