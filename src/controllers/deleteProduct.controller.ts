import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { AppResponse } from '../@types';
import Product from '../models/Product';

interface IDeleteProductParams {
  id: string;
}

export default class DeleteProductController {
  async handle(
    req: Request<IDeleteProductParams>,
    res: Response<AppResponse<null>>
  ) {
    const { id } = req.params;
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Product)
        .where('id = :id', { id })
        .execute();

      return res.status(200).json({
        success: true,
        message: 'Product delected successfull',
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
