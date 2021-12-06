import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Paper from '../models/Paper';

export default class AllPapersController {
  async handle(_: Request, res: Response<AppResponse<Paper[]>>) {
    try {
      const papers = await getRepository(Paper).find();

      return res.status(200).json({
        success: true,
        data: papers,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
