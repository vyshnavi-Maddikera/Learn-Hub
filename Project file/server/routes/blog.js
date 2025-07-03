import express from "express";
import { protect } from "../middlewares/auth.js";
import {searchBlogs , postBlog, getAllBlogs, getBlog, getBlogsByCategory} from "../controllers/blog.js"
import {upload} from "../middlewares/upload.js"

const Blogrouter = express.Router();

// BlogRoutes
Blogrouter.post("/blog-post",protect,upload.single("imageUrl"), postBlog);
Blogrouter.get("/", getAllBlogs);
Blogrouter.get("/category/:category", getBlogsByCategory);
Blogrouter.get("/:id" , getBlog);
Blogrouter.post("/blog-search" , searchBlogs);

export {Blogrouter};