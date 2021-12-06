import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import PlatesType from '../models/PlatesType';
import { Messages } from '../utils/messages';

interface IAddPlateType {
  designation: string;
}

export default class AddPlateTypeController {
  async handle(
    req: Request<any, any, IAddPlateType>,
    res: Response<AppResponse<PlatesType>>
  ) {
    const { designation } = req.body;
    try {
      const plateType = await getRepository(PlatesType).save({ designation });

      return res.status(201).json({
        success: true,
        data: plateType,
        message: Messages.platesTypeAddSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
