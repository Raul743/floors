import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppResponse } from '../@types';
import Permission from '../models/Permission';
import { Messages } from '../utils/messages';

interface ICreatePermission {
  permission: string;
}

export default class CreatePermissionController {
  async handle(
    req: Request<any, any, ICreatePermission>,
    res: Response<AppResponse<Permission>>
  ) {
    try {
      const permissionRepository = getRepository(Permission);

      const newPermission = new Permission();
      newPermission.permission = req.body.permission;

      const permission = await permissionRepository.save(newPermission);

      return res.status(201).json({
        success: true,
        data: permission,
        message: Messages.permissionAddedSuccessfull,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
