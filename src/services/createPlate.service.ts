import { getRepository } from 'typeorm';
import Plate from '../models/Plate';
import PlatesProducts from '../models/PlatesProducts';
import PlatesType from '../models/PlatesType';

interface ICreatePlate {
  designation: string;
  price: number;
  description: string;
  plateTypeId: string;
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
}

export default class CreatePlateService {
  async execute({
    designation,
    price,
    description,
    plateTypeId,
    products,
  }: ICreatePlate) {
    try {
      const plateType = await getRepository(PlatesType)
        .createQueryBuilder('plate')
        .where('plate.id = :id', { id: plateTypeId })
        .getOne();

      if (!plateType) {
        throw new Error('Plate type not found');
      }

      const plateRepository = getRepository(Plate);

      const newPlate = new Plate();
      newPlate.description = description;
      newPlate.designation = designation;
      newPlate.price = price;
      newPlate.typePlate = plateType;

      const plate = await plateRepository.save(newPlate);

      const queries: string[] = [];
      products.map((product) =>
        queries.push(`('${plate.id}', '${product.id}', '${product.quantity}')`)
      );

      await getRepository(PlatesProducts).query(
        `INSERT INTO plates_products (plate_id, product_id, quantity) VALUES ${queries.join(
          ','
        )}`
      );

      return plate;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
