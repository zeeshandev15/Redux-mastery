import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [String],
  reactions: {
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  views: { type: Number, default: 0 },
  userId: { type: Number, default: 0 },
});

export const Post = mongoose.model("POST", postSchema);
