import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Paper from './Paper';
import Permission from './Permission';

@Index('paper_id', ['paperId'], {})
@Index('permission_id', ['permissionId'], {})
@Entity('papers_permissions', { schema: 'flavors' })
export default class PapersPermissions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'paper_id' })
  paperId: number;

  @Column('int', { name: 'permission_id' })
  permissionId: number;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => Paper, (paper) => paper.permissionsPaper, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'paper_id', referencedColumnName: 'id' }])
  paper: Paper;

  @ManyToOne(() => Permission, (permissions) => permissions.papersPermission, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'permission_id', referencedColumnName: 'id' }])
  permission: Permission;
}
