import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import PreparePlateService from '../services/prepatePlate.service';
import { Messages } from '../utils/messages';

interface IPreparePlateParams {
  id: string;
}

export default class PreparePlateController {
  async handle(
    req: Request<IPreparePlateParams>,
    res: Response<AppResponse<null>>
  ) {
    const { id: plateId } = req.params;

    try {
      const service = new PreparePlateService();

      await service.execute({ plateId });

      return res.status(200).json({
        success: true,
        message: Messages.preparePlateSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
