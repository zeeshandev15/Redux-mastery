import { Post } from "../models/postModel.js";

//✅ createPost
export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
    });

    if (!post) {
      return res
        .status(401)
        .json({ success: false, message: "error creating post" });
    }

    return res.status(201).json({ success: true, post });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//✅ getPost
export const getPost = async (_req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      return res
        .status(404)
        .json({ success: false, message: "Post not Found" });
    }

    return res.status(200).json({ success: true, posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//✅ getPostById
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not Found" });
    }

    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//✅ updatePost
export const updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (!updatePost) {
      return res
        .status(404)
        .json({ success: false, message: "Post not Found" });
    }

    return res.status(200).json({ success: true, updatePost });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ deletePost
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post Not Found" });
    }

    return res.json({ success: true, message: "Post deleted Sucessfully" });
  } catch (error) {
    return res.status(500).json({ success: true, message: error.message });
  }
};
