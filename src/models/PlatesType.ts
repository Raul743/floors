import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Plate from "./Plate";

@Entity("type_plates", { schema: "flavors" })
export default class PlatesType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Designation", length: 50 })
  designation: string;

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

  @OneToMany(() => Plate, (plate) => plate.typePlate)
  plates: Plate[];
}
