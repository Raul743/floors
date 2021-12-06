import { NextFunction, Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import { AppResponse } from "../@types";
import VerifyTokenService from "../services/verifyToken.service";

function getTokenFromHeaders(headers: IncomingHttpHeaders) {
  const header = headers.authorization;

  if (!header) {
    return header;
  }

  return header.split(" ")[1];
}

const tokenGuard =
  () =>
  async (
    req: Request,
    res: Response<AppResponse<string>>,
    next: NextFunction
  ) => {
    const token =
      getTokenFromHeaders(req.headers) ||
      req.query.token ||
      req.body.token ||
      "";

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Head token is required",
      });
    }

    try {
      const service = new VerifyTokenService();

      const verified = await service.execute({ token });

      if (!verified) {
        return res.status(500).json({
          success: false,
          message: "Authentication failed",
        });
      }

      next();
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

export default tokenGuard;
