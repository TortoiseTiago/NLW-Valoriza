import { Request, Response } from "express";
import { ListUsersService } from "../services/ListusersService";

class ListUserController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json(users);
  }
}

export { ListUserController };
