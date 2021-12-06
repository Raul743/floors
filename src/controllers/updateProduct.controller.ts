import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import Product from '../models/Product';
import UpdateProductService from '../services/updateProduct.service';

interface IUpdateProductParams {
  id: string;
}

interface IUpdateProductBody {
  name?: string;
  designation?: string;
  price?: number;
  currentUnit?: number;
  recommendedUnit?: number;
  securityAmount?: number;
  categoryId?: string;
  measurementUnit?: string;
  unitDose?: string;
  measureValue?: number;
  quantity?: number;
}

export default class UpdateProductController {
  async handle(
    req: Request<IUpdateProductParams, any, IUpdateProductBody>,
    res: Response<AppResponse<Product>>
  ) {
    const { id } = req.params;

    const service = new UpdateProductService();
    try {
      const product = await service.execute({ productId: id, ...req.body });

      return res.status(200).json({
        success: true,
        data: product,
        message: 'Product updated successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
