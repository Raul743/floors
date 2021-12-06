import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { showError } from '.';

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    designation: yup.string().required(),
    price: yup.number().min(0).required(),
    currentUnit: yup.number().min(0).required(),
    measureValue: yup.number().min(0).required(),
    quantity: yup.number().min(0).required(),
    recommendedUnit: yup.number().min(0).required(),
    securityAmount: yup.number().min(0).required(),
    categoryId: yup.string().required(),
    measurementUnit: yup.string().required(),
    unitDose: yup.string().required(),
  });

  await showError(req, res, next, schema);
};

export const updateProduct = async (
  req: Request<any>,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    name: yup.string(),
    designation: yup.string(),
    price: yup.number().min(0),
    currentUnit: yup.number().min(1),
    recommendedUnit: yup.number().min(1),
    securityAmount: yup.number().min(1),
    categoryId: yup.string(),
    measurementUnit: yup.string(),
    unitDose: yup.string(),
    measureValue: yup.number().min(1),
    quantity: yup.number().min(1),
  });

  await showError(req, res, next, schema);
};
