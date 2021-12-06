import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { showError } from ".";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  await showError(req, res, next, schema);
};
