import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import User from '../models/User';
import AddMemberService from '../services/addMember.service';
import { Messages } from '../utils/messages';

interface IAddMemberBody {
  email: string;
  password: string;
  paperId: string;
}

export default class AddMemberController {
  async handle(
    req: Request<any, any, IAddMemberBody>,
    res: Response<AppResponse<User>>
  ) {
    try {
      const service = new AddMemberService();

      const user = await service.execute({ ...req.body });

      return res.status(201).json({
        success: true,
        data: user,
        message: Messages.memberAddedSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
