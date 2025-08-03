"use client";

import path from "path";
import { fileURLToPath } from "url";
import next from "next";

import cors from "cors";

import express from "express";
import { config } from "dotenv";
import connectDB from "./src/config/db.js";
import productRoutes from "./src/api/productRoute.js";
import customerRoutes from "./src/api/customerRoute.js";
import postRoutes from "./src/api/postRoute.js";
import { errorMiddleware } from "./src/middlewares/error.js";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

config({ path: ".env" });
const PORT = process.env.PORT || 4000;

app.prepare().then(async () => {
  await connectDB();
  const server = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  server.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:3001"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  server.use(express.json());

  server.use("/uploads", express.static(path.join(__dirname, "uploads")));
  server.use("/api/products", productRoutes);
  server.use("/api/customers", customerRoutes);
  server.use("/api/posts", postRoutes);
  server.get("/api/custom", (_req, res) => {
    res.json({ message: "This is a custom route!" });
  });

  server.use(errorMiddleware);
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Readyy on http://localhost:${PORT}`);
  });
});
