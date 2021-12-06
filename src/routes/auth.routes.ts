import { Router } from "express";

import LoginController from "../controllers/login.controller";

import { login } from "../middlewares/auth.middleware";

const router = Router();

const loginController = new LoginController();

router.post("/auth/login", login, loginController.handle);

export default router;
