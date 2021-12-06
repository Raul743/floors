import { Request, Response } from "express";
import { AppResponse } from "../@types";
import Category from "../models/Category";
import CreateCategoryService from "../services/createCategory.service";

interface ICreateCategoryBody {
  designation: string;
}

export default class CreateCategoryController {
  async handle(
    req: Request<any, any, ICreateCategoryBody>,
    res: Response<AppResponse<Category>>
  ) {
    const { designation } = req.body;

    const service = new CreateCategoryService();

    try {
      const category = await service.execute({ designation });

      return res.status(201).json({
        success: true,
        data: category,
        message: "Category created successfull",
      });
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
