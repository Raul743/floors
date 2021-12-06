import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Category from '../models/Category';

export default class AllCategoriesController {
  async handle(_: Request, res: Response<AppResponse<Category[]>>) {
    try {
      const categories = await getRepository(Category)
        .createQueryBuilder('category')
        .orderBy('designation', 'ASC')
        .getMany();

      return res.status(200).json({
        success: true,
        data: categories,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
