import { Product } from "../models/productModel.js";

// ✅ create product
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;
    const image = req.file ? req.file.filename : null;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      date,
      image,
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Error creating product",
    });
  }
};

// ✅ Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "Products not Found" });
    }
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Single Product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not Found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Products
export const updateProduct = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;
    const productId = req.params.id;
    const image = req.file ? req.file.filename : null;

    const updateData = {
      title,
      description,
      price,
      date,
      image,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.json({
      success: true,
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product Not Found" });
    if (product.image) {
      const filePath = path.join("app", "uploads", product.image);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
