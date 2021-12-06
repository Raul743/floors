import Category from "../models/Category";

interface ICategory {
  designation: string;
}

export default class CreateCategoryService {
  async execute({ designation }: ICategory) {
    try {
      const category = new Category();
      category.designation = designation;

      return await category.save();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
