import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';

interface ILogin {
  email: string;
  password: string;
}

export default class LoginService {
  async execute({ email, password }: ILogin) {
    try {
      const user = await getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordEqual = await bcrypt.compare(password, user.password);

      if (!isPasswordEqual) {
        throw new Error('Invalid email or password');
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '');

      return {
        auth: {
          type: 'jwt',
          token,
        },
        user,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
