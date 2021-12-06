import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { showError } from '.';

export const addPlatesType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string().required(),
  });

  await showError(req, res, next, schema);
};

export const updatePlatesType = async (
  req: Request<any>,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    designation: yup.string(),
  });

  await showError(req, res, next, schema);
};
