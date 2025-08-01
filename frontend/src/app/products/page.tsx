"use client";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProducts,
} from "@/lib/api/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (!products || products.length === 0) {
        await dispatch(getProducts());
      }
    };

    fetchData();
  }, [dispatch, products.length]);

  useEffect(() => {
    console.log("i wanna check products", products);
  }, [products]);

  const handleCreate = async () => {
    const formData = {
      title: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones.",
      date: "2025-08-01",
      price: "$199.99",
      image: "https://example.com/image.jpg",
    };
    try {
      const resultAction = await dispatch(createProduct(formData));
      if (createProduct.fulfilled.match(resultAction)) {
        alert("create product successfully");
      } else {
        throw new Error("Failed to create");
      }
    } catch (error: any) {
      console.error("create Error:", error.message);
      alert("An error occur while creating the product");
    }
  };

  const handleUpdate = async () => {
    const updateData = {
      _id: "688c144c68decd75e58dfb78",
      title: "Watch2",
      description: "watch best seller2.",
      date: "2025-08-01",
      price: "$299.99",
      image: "https://example.com/image.jpg",
    };
    try {
      const resultAction = await dispatch(
        updateProducts({ id: updateData._id, updateData })
      );

      if (updateProducts.fulfilled.match(resultAction)) {
        alert("update Product successfully");
      } else {
        throw new Error("Failed to udpate");
      }
    } catch (error: any) {
      console.error("update Error:", error.message);
      alert("An error accour while the update product");
    }
  };

  const handleDelete = async () => {
    try {
      const resultAction = await dispatch(
        deleteProduct({ id: "688c144c68decd75e58dfb78" })
      );

      if (deleteProduct.fulfilled.match(resultAction)) {
        alert("product deleted successfully");
        await dispatch(getProducts());
      } else {
        throw new Error("delete Failed");
      }
    } catch (error: any) {
      console.error("delete Error:", error.message);
      alert("An error accour while deleting the product");
    }
  };

  if (loading) return <p>loading...</p>;

  return (
    <div>
      This is our Products
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleCreate}
      >
        create
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleUpdate}
      >
        update
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductPage;
