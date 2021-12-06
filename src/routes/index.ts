import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import docs from '../../docs';
import authRoutes from './auth.routes';
import tokenGuard from '../middlewares/token-guard';
import categoryRoutes from './category.routes';
import productRoutes from './product.routes';
import plateRoutes from './plate.routes';
import platesTypeRoutes from './platesType.routes';
import userRoutes from './user.routes';
import paperRoutes from './paper.routes';
import purchaseListRoutes from './purchaseList.routes';

const router = Router();

router.get('/', (_, res) => {
  return res.status(200).json({
    message: 'Server running',
  });
});

/**
 * Routes without auth
 */
router.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
router.use(authRoutes);

/**
 * Middleware
 */
router.use(tokenGuard());

/**
 * Routes with auth
 */
router.use(categoryRoutes);
router.use(productRoutes);
router.use(plateRoutes);
router.use(platesTypeRoutes);
router.use(userRoutes);
router.use(paperRoutes);
router.use(purchaseListRoutes);

export default router;
