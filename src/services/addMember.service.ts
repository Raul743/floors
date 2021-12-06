import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

import Paper from '../models/Paper';
import User from '../models/User';
import UserPaper from '../models/UserPaper';

import { Messages } from '../utils/messages';

interface IAddMember {
  email: string;
  password: string;
  paperId: string;
}

export default class AddMemberService {
  async execute({ email, paperId, password }: IAddMember) {
    const userRepository = getRepository(User);

    try {
      const emailExists = await userRepository
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      if (emailExists) {
        throw new Error(Messages.emailAlreadyRegistered);
      }

      const paper = await getRepository(Paper)
        .createQueryBuilder('paper')
        .where('paper.id = :id', { id: paperId })
        .getOne();

      if (!paper) {
        throw new Error(Messages.paperNotFound);
      }

      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(password, salt);

      const newUser = new User();
      newUser.email = email;
      newUser.password = hash;

      const user = await userRepository.save(newUser);

      const userPaper = new UserPaper();
      userPaper.user = user;
      userPaper.paper = paper;

      await userPaper.save();

      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
