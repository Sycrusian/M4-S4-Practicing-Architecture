import { Request, Response } from "express";
import { IUser } from "../interface/user";
import { generateId, userDatabase } from "../database/database";

export class UserController {

  createUser(req: Request, res: Response): Response {
    const newUser: IUser = {
      id: generateId(),
      name: req.body.name,
      email: req.body.email
    };

    userDatabase.push(newUser);

    return res.status(201).json(newUser);
  }

}