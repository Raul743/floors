import { getRepository } from 'typeorm';
import Category from '../models/Category';
import Product from '../models/Product';

interface IProduct {
  name: string;
  designation: string;
  price: number;
  currentUnit: number;
  recommendedUnit: number;
  securityAmount: number;
  categoryId: string;
  measurementUnit: string;
  unitDose: string;
  measureValue: number;
  quantity: number;
}

export default class AddProductService {
  async execute(props: IProduct) {
    const {
      name,
      designation,
      price,
      currentUnit,
      recommendedUnit,
      securityAmount,
      categoryId,
      measurementUnit,
      unitDose,
      measureValue,
      quantity,
    } = props;

    const productRepository = getRepository(Product);

    try {
      const category = await getRepository(Category)
        .createQueryBuilder('category')
        .where('category.id = :id', { id: categoryId })
        .getOne();

      if (!category) {
        throw new Error('Category not found');
      }

      const product = new Product();
      product.name = name;
      product.designation = designation;
      product.price = price;
      product.qqdUnityCurrent = currentUnit;
      product.qqdUnityRecommended = recommendedUnit;
      product.securityAmount = securityAmount;
      product.unitMeasurement = measurementUnit;
      product.category = category;
      product.unitDose = unitDose;
      product.measureValue = measureValue;
      product.quantity = quantity;
      product.dose = Number(product.measureValue) / Number(product.quantity);

      return await productRepository.save(product);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
