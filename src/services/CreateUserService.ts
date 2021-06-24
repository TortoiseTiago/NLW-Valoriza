import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin, password }: UserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error("Invalid Email");

    const userAlreadyExist = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExist) throw new Error("User already exists");

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService };
