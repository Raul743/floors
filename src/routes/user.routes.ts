import { Router } from 'express';

import AddMemberController from '../controllers/addMember.controller';

import { addMember } from '../middlewares/user.middleware';

const router = Router();

const addMemberController = new AddMemberController();

router.post('/add-member', addMember, addMemberController.handle);

export default router;
