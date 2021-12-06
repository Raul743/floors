import { Router } from 'express';

import CreatePlateController from '../controllers/createPlate.controller';
import GetPlateController from '../controllers/getPlate.controller';
import AllPlatesController from '../controllers/allPlates.controller';
import UpdatePlateController from '../controllers/updatePlate.controller';
import DeletePlateController from '../controllers/deletePlate.controller';
import PreparePlateController from '../controllers/preparePlate.controller';

import { createPlate, updatePlate } from '../middlewares/plate.middleware';

const router = Router();

const createPlateController = new CreatePlateController();
const allPlatesController = new AllPlatesController();
const updatePlateController = new UpdatePlateController();
const deletePlateController = new DeletePlateController();
const getPlateController = new GetPlateController();
const preparePlateController = new PreparePlateController();

router.get('/plates/:id', getPlateController.handle);
router.get('/plates', allPlatesController.handle);
router.post('/plates', createPlate, createPlateController.handle);
router.put('/plates/:id', updatePlate, updatePlateController.handle);
router.delete('/plates/:id', deletePlateController.handle);

router.post('/plates/:id/prepare', preparePlateController.handle);

export default router;
