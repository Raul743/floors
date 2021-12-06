import { Router } from 'express';

import AddPaperController from '../controllers/addPaper.controller';
import AllPapersController from '../controllers/allPapers.controller';

import { addPaper } from '../middlewares/paper.middleware';

const router = Router();

const addPaperController = new AddPaperController();
const allPaperController = new AllPapersController();

router.get('/papers', allPaperController.handle);
router.post('/papers', addPaper, addPaperController.handle);

export default router;
