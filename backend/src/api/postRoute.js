import {
  createPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postcontroller.js";
import express from "express";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
export default router;
