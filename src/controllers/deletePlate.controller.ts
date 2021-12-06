import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { AppResponse } from '../@types';
import Plate from '../models/Plate';

interface IDeletePlateParams {
  id: string;
}

export default class DeletePlateController {
  async handle(
    req: Request<IDeletePlateParams>,
    res: Response<AppResponse<null>>
  ) {
    const { id } = req.params;
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Plate)
        .where('id = :id', { id })
        .execute();

      return res.status(200).json({
        success: true,
        message: 'Plate delected successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
