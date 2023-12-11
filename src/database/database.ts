import { IUser } from "../interface/user";

export const userDatabase: IUser[] = [];

let id = 1;

export const generateId = () => {
  return id++;
}