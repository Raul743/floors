import { Request, Response } from "express";
import { AuthResponse } from "../@types/data";
import { AppResponse } from "../@types/response";
import LoginService from "../services/login.service";

interface ILoginBody {
  email: string;
  password: string;
}

export default class LoginController {
  async handle(
    req: Request<any, any, ILoginBody>,
    res: Response<AppResponse<AuthResponse>>
  ) {
    const { email, password } = req.body;

    const loginService = new LoginService();

    try {
      const user = await loginService.execute({ email, password });

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
