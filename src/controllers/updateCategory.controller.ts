import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AppResponse } from "../@types";
import Category from "../models/Category";

interface IUpdateCategoryParams {
  id: string;
}

interface IUpdateCategoryBody {
  designation?: string;
}

export default class UpdateCategoryController {
  async handle(
    req: Request<IUpdateCategoryParams, any, IUpdateCategoryBody>,
    res: Response<AppResponse<Category>>
  ) {
    const { id } = req.params;
    const { designation } = req.body;

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

      category.designation = designation ?? category.designation;

      return res.status(200).json({
        success: true,
        data: await category.save(),
        message: "Category updated successfull",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
