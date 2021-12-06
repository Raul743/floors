import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { showError } from ".";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string().min(1).required(),
  });

  await showError(req, res, next, schema);
};

export const updateCategory = async (
  req: Request<any>,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string().min(1),
  });

  await showError(req, res, next, schema);
};
