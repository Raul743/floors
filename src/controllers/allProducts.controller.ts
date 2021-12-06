import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Product from '../models/Product';
import ProductRepository from '../repositories/product.repository';

export default class AllProductsController {
  async handle(_: Request, res: Response<AppResponse<Product[]>>) {
    try {
      const productRepository = getCustomRepository(ProductRepository);

      const products = await productRepository.find({
        relations: ['category'],
        order: { name: 'ASC' },
      });

      return res.status(200).json({
        success: true,
        data: products,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
