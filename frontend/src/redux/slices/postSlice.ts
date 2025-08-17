import {
  createPost,
  deletePost,
  getPosts,
  updatePosts,
} from "../../lib/api/postApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  _id: String;
  title: String;
  body: String;
  tags: String[];
  reactions: {
    likes: Number;
    dislikes: Number;
  };
  views: Number;
  userId: Number;
}

interface postResponse {
  success: boolean;
  message: String;
  posts: Post[];
}
interface postState {
  posts: Post[];
  loading: boolean;
  error: String | null;
}

const initialState: postState = {
  posts: [],
  loading: false,
  error: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearAuthState: () => initialState,
  },

  extraReducers(builder) {
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      createPost.fulfilled,
      (state, action: PayloadAction<postResponse>) => {
        state.loading = false;
        state.posts = action.payload.posts;
      }
    );
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as String) ||
        action.error.message ||
        "Error creating post";
    });

    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<postResponse>) => {
        state.loading = false;
        state.posts = action.payload.posts;
      }
    );

    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as String) || action.error.message || "Failed to fetch";
    });

    builder.addCase(
      updatePosts.fulfilled,
      (state, action: PayloadAction<Post>) => {
        state.loading = false;
        const index = state.posts.findIndex(
          (i) => i._id === action.payload._id
        );
        state.posts[index] = action.payload;
      }
    );

    builder.addCase(updatePosts.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "failed to update post";
    });

    builder.addCase(
      deletePost.fulfilled,
      (state, action: PayloadAction<{ id: string }>) => {
        state.loading = false;
        state.posts = state.posts.filter((i) => i._id !== action.payload.id);
      }
    );

    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "Failed to delete post";
    });
  },
});

export const { clearAuthState } = postSlice.actions;

export default postSlice.reducer;
