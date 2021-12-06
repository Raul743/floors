import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import UserPermissions from './UserPermissions';
import PapersPermissions from './PapersPermissions';

@Entity('permissions', { schema: 'flavors' })
export default class Permission {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'permission', length: 50 })
  permission: string;

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

  @OneToMany(() => UserPermissions, (users) => users.permission)
  usersPermission: UserPermissions[];

  @OneToMany(
    () => PapersPermissions,
    (papersPermissions) => papersPermissions.permission
  )
  papersPermission: PapersPermissions[];
}
