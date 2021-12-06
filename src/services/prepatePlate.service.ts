import { getRepository } from 'typeorm';
import Plate from '../models/Plate';
import { Messages } from '../utils/messages';

interface IPreparePlate {
  plateId: string;
}

export default class PreparePlateService {
  async execute(props: IPreparePlate) {
    const { plateId } = props;

    try {
      const plate = await getRepository(Plate).findOne(plateId, {
        relations: ['productsPlate'],
      });

      if (!plate) {
        throw new Error(Messages.plateNotFound);
      }

      const productIndex = plate.productsPlate.findIndex(
        (productPlate) =>
          productPlate.quantity > productPlate.product.qqdUnityCurrent
      );

      if (productIndex >= 0) {
        throw new Error(
          `The ${plate.productsPlate[productIndex].product.name} has insuficient quantity for prepare this plate`
        );
      }

      plate.productsPlate.map(async (productPlate) => {
        productPlate.product.qqdUnityCurrent =
          Number(productPlate.product.qqdUnityCurrent) -
          Number(productPlate.quantity);

        await productPlate.product.save();
      });

      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
