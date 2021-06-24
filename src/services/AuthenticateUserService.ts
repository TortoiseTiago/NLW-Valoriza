import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersrepository = getCustomRepository(UsersRepository);

    const user = await usersrepository.findOne({
      email,
    });

    if (!user) throw new Error("Email/Password incorrect!");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect!");

    const token = sign(
      {
        email: user.email,
      },
      "29cd95a6f1ccd557f698affaff5f869d",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
