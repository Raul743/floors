import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from './Category';
import PlatesProducts from './PlatesProducts';

@Index('Category_id', ['categoryId'], {})
@Entity('products', { schema: 'flavors' })
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'Designation', length: 50 })
  designation: string;

  @Column('varchar', { name: 'unit_dose', length: 50 })
  unitDose: string;

  @Column('float', { name: 'price', precision: 12 })
  price: number;

  @Column('float', { name: 'dose', precision: 12 })
  dose: number;

  @Column('float', { name: 'measure_value', precision: 12 })
  measureValue: number;

  @Column('int', { name: 'qqd_unity_current' })
  qqdUnityCurrent: number;

  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('int', { name: 'qqd_unity_recommended' })
  qqdUnityRecommended: number;

  @Column('int', { name: 'Security_amount' })
  securityAmount: number;

  @Column('int', { name: 'Category_id' })
  categoryId: number;

  @Column('varchar', { name: 'Unit_measurement', length: 50 })
  unitMeasurement: string;

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

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Category_id', referencedColumnName: 'id' }])
  category: Category;

  @OneToMany(() => PlatesProducts, (platesProducts) => platesProducts.product)
  platesProduct: PlatesProducts[];
}
