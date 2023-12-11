import { Request, Response, NextFunction } from "express";
import { userDatabase } from "../database/database";

export class isUserEmailUnique {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (userDatabase.some(user => user.email === req.body.email)) {
      return res.status(409).json({ message: "E-mail already registered."});
    }
    next();
  }
}