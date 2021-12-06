import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import Plate from '../models/Plate';
import UpdatePlateService from '../services/updatePlate.service';

interface IUpdatePlateParams {
  id: string;
}

interface IUpdatePlateBody {
  designation?: string;
  price?: number;
  description?: string;
  plateTypeId?: string;
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
}

export default class UpdatePlateController {
  async handle(
    req: Request<IUpdatePlateParams, any, IUpdatePlateBody>,
    res: Response<AppResponse<Plate>>
  ) {
    const { id } = req.params;

    const service = new UpdatePlateService();
    try {
      const plate = await service.execute({ plateId: id, ...req.body });

      return res.status(200).json({
        success: true,
        data: plate,
        message: 'Plate updated successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
