import { Request, Response, NextFunction } from "express";
import { userDatabase } from "../database/database";

export class ValidateUserId {
  static execute(req: Request, res: Response, next: NextFunction) {
    const selectedUser = userDatabase.find(user => user.id === Number(req.params.id));

    if (!selectedUser) {
      return res.status(404).json({ message: "User not found."});
    }

    res.locals.user = selectedUser;

    next();
  }
}