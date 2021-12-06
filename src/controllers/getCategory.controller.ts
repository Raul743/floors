import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AppResponse } from "../@types";
import Category from "../models/Category";

interface IGetCategoryParams {
  id: string;
}

export default class GetCategoryController {
  async handle(
    req: Request<IGetCategoryParams>,
    res: Response<AppResponse<Category>>
  ) {
    const { id } = req.params;

    try {
      const category = await getRepository(Category)
        .createQueryBuilder("category")
        .where("category.id = :id", { id })
        .getOne();

      if (!category) {
        return res.status(500).json({
          success: false,
          message: "Category not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: category,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
