import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/Compliments.Repository";

class ListUserReceiverComplimentsService {
  async execute(user_id) {
    const complimentsRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentsRepository.find({
      where: { user_receiver: user_id },
      relations: ["UserSender", "UserReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserReceiverComplimentsService };
