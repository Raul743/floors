import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Paper from './Paper';
import User from './User';

@Index('paper_id', ['paperId'], {})
@Index('user_id', ['userId'], {})
@Entity('papers_users', { schema: 'flavors' })
export default class UserPaper extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'paper_id' })
  paperId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

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

  @ManyToOne(() => Paper, (paper) => paper.usersPaper, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'paper_id', referencedColumnName: 'id' }])
  paper: Paper;

  @ManyToOne(() => User, (users) => users.paper, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
