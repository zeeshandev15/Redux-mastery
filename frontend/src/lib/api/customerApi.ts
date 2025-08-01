import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance";
import { User } from "@/redux/slices/customerSlice";

// createCustomer
export const createCustomer = createAsyncThunk(
  "create/customer",
  async ({ data }: any, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.post("/api/customers", data);
      return result;
    } catch (error: any) {
      const errorMessage =
        error?.response.data.message || error.message || "Something Went Wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// fetchCustomer
export const fetchCustomer = createAsyncThunk(
  "fetch/customer",
  async (_, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.get("/api/customers");
      return result;
    } catch (error: any) {
      const errormessage =
        error?.response.data.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errormessage);
    }
  }
);

// updateCustomers
export const updateCustomers = createAsyncThunk<
  User,
  { id: string; data: any }
>("update/customers", async ({ id, data }, thunkAPI) => {
  try {
    const { data: result } = await axiosInstance.put(
      `/api/customers/${id}`,
      data
    );
    return result;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || error.message || "Something went wrong";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// deleteCustomer
export const deleteCustomer = createAsyncThunk<User, { id: string }>(
  "delete/customers",
  async ({ id }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.delete(
        `/api/customers/${id}`
      );
      return result;
    } catch (error: any) {
      const errorMessage =
        error?.response.data.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
