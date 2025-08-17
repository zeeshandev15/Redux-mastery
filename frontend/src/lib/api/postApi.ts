import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance";
import { Post } from "../../redux/slices/postSlice";

export const createPost = createAsyncThunk(
  "create/post",
  async ({ data }: { data: Omit<Post, "_id"> }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.post("api/posts", data);
      return result;
    } catch (error: any) {
      const errorMessage =
        error?.response.data.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// getPOsts
export const getPosts = createAsyncThunk("get/post", async (_, thunkAPI) => {
  try {
    const { data: result } = await axiosInstance.get("api/posts");
    return result;
  } catch (error: any) {
    const errorMessage =
      error?.response.data.message || error.message || "something went wrong";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// updatePosts
export const updatePosts = createAsyncThunk(
  "update/posts",
  async ({ id, data }: { id: String; data: Omit<Post, "_id"> }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.put(`api/posts/${id}`, data);
      return result;
    } catch (error: any) {
      const errorMessage =
        error?.response.data.message || error.message || "something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// deletePost
export const deletePost = createAsyncThunk(
  "delete/post",
  async ({ Id }: { Id: string }, thunkAPI) => {
    try {
      const { data: result } = await axiosInstance.delete(`api/posts/${Id}`);
      return result;
    } catch (error: any) {
      const errorMessage =
        error.response.data.message || error.message || "Something Went Wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
