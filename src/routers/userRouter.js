import express from "express";
import { see, logout, edit, password } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/password", password);

export default userRouter;
