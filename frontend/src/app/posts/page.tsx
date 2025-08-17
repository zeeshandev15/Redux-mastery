"use client";
import React, { useEffect } from "react";
import {
  createPost,
  deletePost,
  getPosts,
  updatePosts,
} from "@/lib/api/postApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { Post } from "../../redux/slices/postSlice";
import Customer from "../customers/page";

const Post = () => {
  const disaptch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      if (posts.length === 0) {
        await disaptch(getPosts());
      }
    };

    fetchPosts();
  }, [disaptch, posts.length]);

  useEffect(() => {
    console.log(Customer);
  }, [Customer]);
  const handleCreate = async () => {
    const post = {
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 1,
        dislikes: 2,
      },
      views: 3,
      userId: 12,
    };
    try {
      const resultAction = await disaptch(createPost({ data: post }));
      if (createPost.fulfilled.match(resultAction)) {
        alert("post create Successfully");
      } else {
        throw new Error("create Failed");
      }
    } catch (error: any) {
      console.error("Create error:", error.message);
      alert("An error occured while creating the post");
    }
  };

  const handleUpdate = async () => {
    const Id = "68a18d619e37289c04cbe893";
    const updatePost = {
      title: "Her father had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 1,
        dislikes: 2,
      },
      views: 3,
      userId: 12,
    };
    try {
      const resultAction = await disaptch(
        updatePosts({ id: Id, data: updatePost })
      );

      if (updatePosts.fulfilled.match(resultAction)) {
        alert("update Post successfully");
      } else {
        throw new Error("Failed to update");
      }
    } catch (error: any) {
      console.error("update Error:", error.message);
      alert("An error Accour while the post update");
    }
  };

  const handleDelete = async () => {
    const Id = "68a18d619e37289c04cbe893";
    try {
      const resultAction = await disaptch(deletePost({ Id }));
      if (deletePost.fulfilled.match(resultAction)) {
        alert("post deleted Successfully");
      } else {
        throw new Error("failed to delete post");
      }
    } catch (error: any) {
      console.error("delete post:", error.message);
      alert("An error accour while deleting the post");
    }
  };

  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      This is our customers
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

export default Post;
