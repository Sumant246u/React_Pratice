import express from "express";
import { getProfile, loginUser, logoutUser, registerUser } from "../controllers/AuthController.js";
import { authMiddleware } from "../middleware/AuthMiddleware.js";


const Router = express.Router();

Router.post('/register',registerUser);
Router.post('/login', loginUser);
Router.get('/profile',authMiddleware,getProfile);
Router.post('/logout', logoutUser);

export default Router;