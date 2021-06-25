import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/Compliments.Repository";

class ListUserSenderComplimentsService {
  async execute(user_id) {
    const complimentsRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentsRepository.find({
      where: { user_sender: user_id },
      relations: ["UserSender", "UserReceiver", "tag"],
    });
    return compliments;
  }
}

export { ListUserSenderComplimentsService };
