import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import UserPaper from './UserPaper';
import PapersPermissions from './PapersPermissions';

@Entity('papers', { schema: 'flavors' })
export default class Paper {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'paper', length: 50 })
  paper: string;

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

  @OneToMany(
    () => PapersPermissions,
    (papersPermissions) => papersPermissions.paper
  )
  permissionsPaper: PapersPermissions[];

  @OneToMany(() => UserPaper, (usersPaper) => usersPaper.paper)
  usersPaper: UserPaper[];
}
