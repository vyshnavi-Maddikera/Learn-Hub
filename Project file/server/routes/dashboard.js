import express from "express";
import {getProfile} from '../controllers/profile.js';
import { protect } from "../middlewares/auth.js";
const ProfileRouter = express.Router();
ProfileRouter.get('/' , protect , getProfile);
export {ProfileRouter}