import { Router } from "express";
import { UserController } from "../controllers/user";
import { isUserEmailUnique } from "../middlewares/isUserEmailUnique";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/", isUserEmailUnique.execute, userController.createUser);