import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Plate from '../models/Plate';

interface IGetPlateParams {
  id: string;
}

export default class GetPlateController {
  async handle(
    req: Request<IGetPlateParams>,
    res: Response<AppResponse<Plate>>
  ) {
    try {
      const { id } = req.params;

      const plate = await getRepository(Plate)
        .createQueryBuilder('plate')
        .innerJoinAndSelect('plate.typePlate', 'type')
        .innerJoinAndSelect('plate.productsPlate', 'products')
        .innerJoinAndSelect('products.product', 'product')
        .where('plate.id = :id', { id })
        .getOne();

      return res.status(200).json({
        success: true,
        data: plate,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
