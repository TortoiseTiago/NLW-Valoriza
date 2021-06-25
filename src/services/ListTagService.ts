import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagsRepository);

    const tags = await tagRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagService };
