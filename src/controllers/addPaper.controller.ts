import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Paper from '../models/Paper';
import { Messages } from '../utils/messages';

interface IAddPaperBody {
  paper: string;
}

export default class AddPaperController {
  async handle(
    req: Request<any, any, IAddPaperBody>,
    res: Response<AppResponse<Paper>>
  ) {
    try {
      const paperRepository = getRepository(Paper);

      const newPaper = new Paper();
      newPaper.paper = req.body.paper;

      const paper = await paperRepository.save(newPaper);

      return res.status(201).json({
        success: true,
        data: paper,
        message: Messages.paperAddedSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
