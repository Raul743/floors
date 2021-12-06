import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import Plate from '../models/Plate';
import CreatePlateService from '../services/createPlate.service';

interface ICreatePlateBody {
  designation: string;
  price: number;
  description: string;
  plateTypeId: string;
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
}

export default class CreatePlateController {
  async handle(
    req: Request<any, any, ICreatePlateBody>,
    res: Response<AppResponse<Plate>>
  ) {
    const service = new CreatePlateService();

    try {
      const plate = await service.execute({ ...req.body });

      return res.status(201).json({
        success: true,
        data: plate,
        message: 'Plate created successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
