import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUsersSendComplimentsService";

class ListSenderComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserSenderService = new ListUserSenderComplimentsService();

    const compliments = await listUserSenderService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListSenderComplimentsController };
