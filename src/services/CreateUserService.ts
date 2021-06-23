import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: UserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error("Invalid Email");

    const userAlreadyExist = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExist) throw new Error("User already exists");

    const user = usersRepository.create({ name, email, admin });
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService };
