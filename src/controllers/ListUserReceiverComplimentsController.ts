import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserREceiverComplimentsService";

class ListReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserReceiverService = new ListUserReceiverComplimentsService();

    const compliments = await listUserReceiverService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListReceiverComplimentsController };
