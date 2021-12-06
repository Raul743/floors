import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { showError } from '.';

export const createPlate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string().min(1).required(),
    price: yup.number().min(1).required(),
    description: yup.string().min(1).required(),
    plateTypeId: yup.string().min(1).required(),
    products: yup.array().min(1).required(),
  });

  await showError(req, res, next, schema);
};

export const updatePlate = async (
  req: Request<any>,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string().min(1),
    price: yup.number().min(1),
    description: yup.string().min(1),
    plateTypeId: yup.string().min(1),
    products: yup.array().min(1),
  });

  await showError(req, res, next, schema);
};
