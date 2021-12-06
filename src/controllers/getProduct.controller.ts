import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Product from '../models/Product';
import ProductRepository from '../repositories/product.repository';

interface IGetProductParams {
  id: string;
}

export default class GetProductController {
  async handle(
    req: Request<IGetProductParams>,
    res: Response<AppResponse<Product>>
  ) {
    const { id } = req.params;

    try {
      const productRepository = getCustomRepository(ProductRepository);

      const product = await productRepository.findOne(id, {
        relations: ['category'],
      });

      if (!product) {
        return res.status(500).json({
          success: false,
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
