import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Expense from './Expense';

@Entity('type_expenses', { schema: 'flavors' })
export default class ExpenseType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'description', length: 50 })
  description: string;

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

  @OneToMany(() => Expense, (expense) => expense.expenseType)
  expenses: Expense[];
}
