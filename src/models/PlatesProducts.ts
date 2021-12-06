import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Plate from './Plate';
import Product from './Product';

@Index('plate_id', ['plateId'], {})
@Index('product_id', ['productId'], {})
@Entity('plates_products', { schema: 'flavors' })
export default class PlatesProducts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'plate_id' })
  plateId: number;

  @Column('int', { name: 'product_id' })
  productId: number;

  @Column('int', { name: 'quantity' })
  quantity: number;

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

  @ManyToOne(() => Plate, (plate) => plate.productsPlate, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    eager: true,
  })
  @JoinColumn([{ name: 'plate_id', referencedColumnName: 'id' }])
  plate: Plate;

  @ManyToOne(() => Product, (product) => product.platesProduct, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    eager: true,
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
