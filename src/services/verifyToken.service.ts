import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import LoggedInService from "./loggedIn.service";
import User from "../models/User";

export interface IVerifyToken {
  token: string;
}

export default class VerifyTokenService {
  async execute({ token }: IVerifyToken): Promise<any> {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET ?? "",
        async (err: any, decoded: any) => {
          if (err) {
            throw new Error(err.message);
          }

          if (decoded) {
            const user = await getRepository(User)
              .createQueryBuilder("user")
              .where("user.id = :id", { id: decoded.id })
              .getOne();

            if (!user) {
              return false;
            }

            LoggedInService._user = user;
            return true;
          } else {
            throw new Error("Authentication failed");
          }
        }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
