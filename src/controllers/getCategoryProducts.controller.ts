import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { AppResponse } from "../@types";
import Category from "../models/Category";
import Product from "../models/Product";
import CategoryRepository from "../repositories/category.repository";

interface IGetCategoryParams {
  id: string;
}

export default class GetCategoryProductsController {
  async handle(
    req: Request<IGetCategoryParams>,
    res: Response<AppResponse<Product[]>>
  ) {
    const { id } = req.params;
    const categoryRepository = getCustomRepository(CategoryRepository);

    try {
      const category = await categoryRepository.findOne(id, {
        relations: ["products"],
      });

      if (!category) {
        return res.status(500).json({
          success: false,
          message: "Category not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: category.products,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
