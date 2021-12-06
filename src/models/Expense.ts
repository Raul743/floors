import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ExpenseType from "./ExpenseType";
import Purchase from "./Purchase";

@Index("type_expense_id", ["typeExpenseId"], {})
@Entity("expenses", { schema: "flavors" })
export default class Expense {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "product_id" })
  productId: number;

  @Column("int", { name: "qqd_unity" })
  qqdUnity: number;

  @Column("float", { name: "predicted_value", nullable: true, precision: 12 })
  predictedValue: number | null;

  @Column("int", { name: "type_expense_id" })
  typeExpenseId: number;

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

  @ManyToOne(() => ExpenseType, (expenseType) => expenseType.expenses, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "type_expense_id", referencedColumnName: "id" }])
  expenseType: ExpenseType;

  @OneToMany(() => Purchase, (purchase) => purchase.expense)
  purchases: Purchase[];
}
