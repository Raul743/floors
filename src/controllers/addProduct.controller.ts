import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import Product from '../models/Product';
import AddProductService from '../services/addProduct.service';

interface IAddProductBody {
  name: string;
  designation: string;
  price: number;
  currentUnit: number;
  recommendedUnit: number;
  securityAmount: number;
  categoryId: string;
  measurementUnit: string;
  unitDose: string;
  measureValue: number;
  quantity: number;
}

export default class AddProductController {
  async handle(
    req: Request<any, any, IAddProductBody>,
    res: Response<AppResponse<Product>>
  ) {
    const service = new AddProductService();

    try {
      const product = await service.execute({ ...req.body });

      return res.status(201).json({
        success: true,
        data: product,
        message: 'Product added successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
