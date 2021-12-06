import { Request, Response } from 'express';
import { AppResponse } from '../@types';
import PapersPermissions from '../models/PapersPermissions';

interface ICreateRelationPermissionAndPaperBody {
  permissionId: string;
  paperId: string;
}

export default class CreateRelationPermissionAndPaperController {
  async handle(
    req: Request<any, any, ICreateRelationPermissionAndPaperBody>,
    res: Response<AppResponse<PapersPermissions>>
  ) {
    try {
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
