import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Plate from '../models/Plate';

export default class AllPlatesController {
  async handle(_: Request, res: Response<AppResponse<Plate[]>>) {
    try {
      const plates = await getRepository(Plate).find({
        relations: ['typePlate', 'productsPlate'],
        order: { designation: 'ASC' },
      });

      return res.status(200).json({
        success: true,
        data: plates,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
