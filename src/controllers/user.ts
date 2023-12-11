import { Request, Response } from "express";
import { UserServices } from "../services/user";

export class UserController {

  createUser(req: Request, res: Response): Response {
    const userServices = new UserServices();
    
    const response = userServices.createUser(req.body.name, req.body.email);

    return res.status(201).json(response);
  }

  getUsers(req: Request, res: Response): Response {
    const userServices = new UserServices();

    const response = userServices.getUsers();

    return res.status(200).json(response);
  }

  getUser(req: Request, res: Response): Response {
    const userServices = new UserServices();

    const response = userServices.getUser(Number(res.locals.user.id));

    return res.status(302).json(response);
  }

  deleteUser(req: Request, res: Response): Response {
    const userServices = new UserServices();

    userServices.deleteUser(Number(res.locals.user.id));

    return res.status(200).send();
  }

}