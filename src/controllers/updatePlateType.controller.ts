import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import PlatesType from '../models/PlatesType';
import { Messages } from '../utils/messages';

interface IUpdatePlateTypeParams {
  id: string;
}

interface IUpdatePlateType {
  designation: string;
}

export default class UpdatePlateTypeController {
  async handle(
    req: Request<IUpdatePlateTypeParams, any, IUpdatePlateType>,
    res: Response<AppResponse<PlatesType>>
  ) {
    const { id } = req.params;
    const { designation } = req.body;

    const plateTypeRepository = getRepository(PlatesType);
    try {
      const plateType = await plateTypeRepository.findOne(id);

      if (!plateType) {
        return res.status(500).json({
          success: false,
          message: Messages.plateTypeNotFound,
        });
      }

      plateType.designation = designation ?? plateType.designation;

      plateTypeRepository.save(plateType);

      return res.status(200).json({
        success: true,
        data: plateType,
        message: Messages.platesTypeUpdatedSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
