import { getConnection, getRepository } from 'typeorm';
import Plate from '../models/Plate';
import PlatesProducts from '../models/PlatesProducts';
import PlatesType from '../models/PlatesType';

interface IUpdatePlate {
  plateId: string;
  designation?: string;
  price?: number;
  description?: string;
  plateTypeId?: string;
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
}

export default class UpdatePlateService {
  async execute({
    designation,
    price,
    description,
    plateTypeId,
    plateId,
    products,
  }: IUpdatePlate) {
    try {
      const plateType = await getRepository(PlatesType)
        .createQueryBuilder('plate')
        .where('plate.id = :id', { id: plateTypeId })
        .getOne();

      if (!plateType && plateTypeId) {
        throw new Error('Plate type not found');
      }

      const plateRepository = getRepository(Plate);

      const plate = await plateRepository.findOne(plateId);

      if (!plate) {
        throw new Error('Plate not found');
      }

      plate.description = description ?? plate.description;
      plate.designation = designation ?? plate.designation;
      plate.price = price ?? plate.price;
      plate.typePlate = plateType ?? plate.typePlate;

      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(PlatesProducts)
        .where('plate_id = :id', { id: plate.id })
        .execute();

      await plateRepository.save(plate);

      if (products && products.length > 0) {
        const queries: string[] = [];
        products.map((product) =>
          queries.push(
            `('${plate.id}', '${product.id}', '${product.quantity}')`
          )
        );

        await getRepository(PlatesProducts).query(
          `INSERT INTO plates_products (plate_id, product_id, quantity) VALUES ${queries.join(
            ','
          )}`
        );
      }

      return await getRepository(Plate).findOne(plate.id, {
        relations: ['typePlate', 'productsPlate'],
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
