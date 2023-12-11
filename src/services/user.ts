import { generateId, userDatabase } from "../database/database";
import { IUser } from "../interface/user";

export class UserServices {
  createUser(name: string, email: string) {
    const newUser: IUser = { id: generateId(), name, email};
    userDatabase.push(newUser);
    return newUser;
  }

  getUsers() {
    return userDatabase;
  }

  getUser(id: number) {
    return userDatabase.find(user => user.id === id);
  }

  deleteUser(id: number){
    const index = userDatabase.findIndex(user => user.id === id);
    userDatabase.splice(index, 1);
  }
}