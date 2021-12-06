import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { AppResponse } from '../@types';
import PlatesType from '../models/PlatesType';
import { Messages } from '../utils/messages';

interface IDeletePlateTypeParams {
  id: string;
}

export default class DeletePlateTypeController {
  async handle(
    req: Request<IDeletePlateTypeParams>,
    res: Response<AppResponse<null>>
  ) {
    const { id } = req.params;

    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(PlatesType)
        .where('id = :id', { id })
        .execute();

      return res.status(200).json({
        success: true,
        message: Messages.deletePlateTypeSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
