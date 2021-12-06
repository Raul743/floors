import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Permission from '../models/Permission';

export default class AllPermissionsController {
  async handle(_: Request, res: Response<AppResponse<Permission[]>>) {
    try {
      const permissions = await getRepository(Permission).find();

      return res.status(200).json({
        success: true,
        data: permissions,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
