import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

interface TagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) throw new Error("Incorrect name");

    const tagAlreadyExist = await tagsRepository.findOne({ name });

    if (tagAlreadyExist) throw new Error("Tag Already Exist");

    const tag = tagsRepository.create({ name });
    await tagsRepository.save(tag);
    return tag;
  }
}

export { CreateTagService };
