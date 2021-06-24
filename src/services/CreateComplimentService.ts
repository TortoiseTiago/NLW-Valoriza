import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/Compliments.Repository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_receiver,
    user_sender,
    message,
  }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver)
      throw new Error("Incorrect user receiver!");

    const userReceiverExist = await usersRepository.findOne(user_receiver);
    if (!userReceiverExist) throw new Error("User Receiver does not exists!");

    const compliment = complimentRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentRepository.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService };
