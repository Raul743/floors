import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import PlatesType from '../models/PlatesType';

export default class AllPlatesTypeController {
  async handle(_: Request, res: Response<AppResponse<PlatesType[]>>) {
    try {
      const platesType = await getRepository(PlatesType)
        .createQueryBuilder()
        .orderBy('designation', 'ASC')
        .getMany();

      return res.status(200).json({
        success: true,
        data: platesType,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
