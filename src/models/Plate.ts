import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PlatesType from './PlatesType';
import PlatesProducts from './PlatesProducts';

@Index('type_plate_id', ['typePlateId'], {})
@Entity('plates', { schema: 'flavors' })
export default class Plate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'Designation', length: 50 })
  designation: string;

  @Column('float', { name: 'price', precision: 12 })
  price: number;

  @Column('text', { name: 'description' })
  description: string;

  @Column('int', { name: 'type_plate_id' })
  typePlateId: number;

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

  @ManyToOne(() => PlatesType, (platesType) => platesType.plates, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'type_plate_id', referencedColumnName: 'id' }])
  typePlate: PlatesType;

  @OneToMany(() => PlatesProducts, (platesProducts) => platesProducts.plate)
  productsPlate: PlatesProducts[];
}
