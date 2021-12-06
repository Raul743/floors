import { Router } from 'express';

import {
  addPlatesType,
  updatePlatesType,
} from '../middlewares/platesType.middleware';

import AddPlateTypeController from '../controllers/addPlateType.controller';
import AllPlatesTypeController from '../controllers/allPlatesType.controller';
import UpdatePlateTypeController from '../controllers/updatePlateType.controller';
import DeletePlateTypeController from '../controllers/deletePlateType.controller';

const router = Router();

const allPlatesTypeController = new AllPlatesTypeController();
const addPlatesTypeController = new AddPlateTypeController();
const updatePlateTypeController = new UpdatePlateTypeController();
const deletePlateTypeController = new DeletePlateTypeController();

router.get('/plates-type', allPlatesTypeController.handle);
router.post('/plates-type', addPlatesType, addPlatesTypeController.handle);
router.put(
  '/plates-type/:id',
  updatePlatesType,
  updatePlateTypeController.handle
);
router.delete('/plates-type/:id', deletePlateTypeController.handle);

export default router;
