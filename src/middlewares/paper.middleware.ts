import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { showError } from '.';

export const addPaper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    paper: yup.string().required(),
  });

  await showError(req, res, next, schema);
};
