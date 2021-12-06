import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Product from '../models/Product';

export default class PurchaseListController {
  async handle(_: Request, res: Response<AppResponse<Product[]>>) {
    try {
      const products = await getRepository(Product)
        .createQueryBuilder('product')
        .innerJoinAndSelect('product.category', 'category')
        .where('product.qqdUnityCurrent < product.qqdUnityRecommended')
        .getMany();

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
