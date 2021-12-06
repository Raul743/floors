import { getCustomRepository, getRepository } from 'typeorm';
import Category from '../models/Category';
import ProductRepository from '../repositories/product.repository';

interface IUpdateProduct {
  productId: string;
  name?: string;
  designation?: string;
  price?: number;
  currentUnit?: number;
  recommendedUnit?: number;
  securityAmount?: number;
  categoryId?: string;
  measurementUnit?: string;
  unitDose?: string;
  measureValue?: number;
  quantity?: number;
}

export default class UpdateProductService {
  async execute(props: IUpdateProduct) {
    const {
      productId,
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

    const productRepository = getCustomRepository(ProductRepository);

    try {
      const category = await getRepository(Category)
        .createQueryBuilder('category')
        .where('category.id = :id', { id: categoryId })
        .getOne();

      if (!category && categoryId) {
        throw new Error('Category not exists');
      }

      const product = await productRepository.findOne(productId);

      if (!product) {
        throw new Error('Product not found');
      }

      product.name = name ?? product.name;
      product.designation = designation ?? product.designation;
      product.price = price ?? product.price;
      product.qqdUnityCurrent = currentUnit ?? product.qqdUnityCurrent;
      product.qqdUnityRecommended =
        recommendedUnit ?? product.qqdUnityRecommended;
      product.securityAmount = securityAmount ?? product.securityAmount;
      product.category = category ?? product.category;
      product.unitMeasurement = measurementUnit ?? product.unitMeasurement;
      product.unitDose = unitDose ?? product.unitDose;
      product.measureValue = measureValue ?? product.measureValue;
      product.quantity = quantity ?? product.quantity;
      product.dose = Number(product.measureValue) / Number(product.quantity);

      return await productRepository.save(product);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
