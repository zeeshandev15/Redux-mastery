import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProducts,
} from "@/lib/api/productApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  image: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface productResponse {
  products: Product[];
  success: boolean;
  message?: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      createProduct.fulfilled,
      (state, action: PayloadAction<productResponse>) => {
        state.loading = false;
        state.products = action.payload.products;
      }
    );
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "Failed to create product";
    });

    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<productResponse>) => {
        state.loading = false;
        state.products = action.payload.products;
      }
    );
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "Failed to fetch products";
    });
    builder.addCase(
      updateProducts.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.loading = false;
        const index = state.products.findIndex(
          (p) => p._id === action.payload._id
        );

        state.products[index] = action.payload;
      }
    );
    builder.addCase(updateProducts.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "Failed to update product";
    });

    builder.addCase(
      deleteProduct.fulfilled,
      (state, action: PayloadAction<{ id: string }>) => {
        state.loading = false;
        state.products = state.products.filter(
          (p) => p._id !== action.payload.id
        );
      }
    );
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) ||
        action.error.message ||
        "Failed to delete product";
    });
  },
});

export const { clearAuthState } = productSlice.actions;
export default productSlice.reducer;
