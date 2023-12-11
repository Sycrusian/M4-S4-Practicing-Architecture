import { Router } from "express";
import { UserController } from "../controllers/user";
import { isUserEmailUnique } from "../middlewares/isUserEmailUnique";
import { ValidateUserId } from "../middlewares/validateUserId";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/", isUserEmailUnique.execute, userController.createUser);

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", ValidateUserId.execute, userController.getUser);

userRouter.delete("/:id", ValidateUserId.execute, userController.deleteUser);