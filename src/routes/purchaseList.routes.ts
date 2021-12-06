import { Router } from 'express';

import PurchaseListController from '../controllers/purchaseList.controller';

const router = Router();

const purchaseListController = new PurchaseListController();

router.get('/purchase-list', purchaseListController.handle);

export default router;
