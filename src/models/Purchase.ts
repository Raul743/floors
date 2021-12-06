import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Expense from "./Expense";

@Index("expense_id", ["expenseId"], {})
@Entity("purchases", { schema: "flavors" })
export default class Purchase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "expense_id" })
  expenseId: number;

  @Column("int", { name: "qqd_unity" })
  qqdUnity: number;

  @Column("float", { name: "amount_paid", precision: 12 })
  amountPaid: number;

  @Column("float", { name: "diference", precision: 12 })
  diference: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @ManyToOne(() => Expense, (expense) => expense.purchases, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "expense_id", referencedColumnName: "id" }])
  expense: Expense;
}
