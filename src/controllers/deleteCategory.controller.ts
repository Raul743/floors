import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { AppResponse } from "../@types";
import Category from "../models/Category";

interface IDeleteCategoryParams {
  id: string;
}

export default class DeleteCategoryController {
  async handle(
    req: Request<IDeleteCategoryParams>,
    res: Response<AppResponse<null>>
  ) {
    const { id } = req.params;

    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Category)
        .where("id = :id", { id })
        .execute();

      return res.status(200).json({
        success: true,
        message: "Category deleted successfull",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
