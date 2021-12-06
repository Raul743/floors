import { Router } from "express";
import CreateCategoryController from "../controllers/createCategory.controller";
import AllCategoriesController from "../controllers/allCategories.controller";
import UpdateCategoryController from "../controllers/updateCategory.controller";
import DeleteCategoryController from "../controllers/deleteCategory.controller";
import GetCategoryController from "../controllers/getCategory.controller";

import {
  createCategory,
  updateCategory,
} from "../middlewares/category.middleware";
import GetCategoryProductsController from "../controllers/getCategoryProducts.controller";

const router = Router();

const createCategoryController = new CreateCategoryController();
const allCategoriesController = new AllCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const getCategoryController = new GetCategoryController();
const getCategoryProductsController = new GetCategoryProductsController();

router.get("/categories", allCategoriesController.handle);
router.get("/categories/:id", getCategoryController.handle);
router.post("/categories", createCategory, createCategoryController.handle);
router.put("/categories/:id", updateCategory, updateCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);

router.get("/categories/:id/products", getCategoryProductsController.handle);

export default router;
