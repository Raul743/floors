import { Router } from 'express';

import AddProductController from '../controllers/addProduct.controller';
import GetProductController from '../controllers/getProduct.controller';
import AllProductsController from '../controllers/allProducts.controller';
import UpdateProductController from '../controllers/updateProduct.controller';
import DeleteProductController from '../controllers/deleteProduct.controller';

import { addProduct, updateProduct } from '../middlewares/product.middleware';

const router = Router();

const getProductController = new GetProductController();
const addProductController = new AddProductController();
const allProductsController = new AllProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

router.get('/products', allProductsController.handle);
router.get('/products/:id', getProductController.handle);
router.post('/products', addProduct, addProductController.handle);
router.put('/products/:id', updateProduct, updateProductController.handle);
router.delete('/products/:id', deleteProductController.handle);

export default router;
