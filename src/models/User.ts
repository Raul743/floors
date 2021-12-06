import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import UserPermissions from './UserPermissions';
import UserPaper from './UserPaper';

@Entity('users', { schema: 'flavors' })
export default class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', length: 50 })
  email: string;

  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  password: string | null;

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

  @OneToMany(() => UserPermissions, (permissions) => permissions.user)
  permissions: UserPermissions[];

  @OneToOne(() => UserPaper, (paper) => paper.user)
  paper: UserPaper;
}
