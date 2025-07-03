import express from "express";
import { getAllCourses, getCourseById } from "../controllers/course.js";

const CourseRouter = express.Router();

CourseRouter.get('/c/:discipline', getAllCourses);
CourseRouter.get('/:id', getCourseById);

export { CourseRouter }