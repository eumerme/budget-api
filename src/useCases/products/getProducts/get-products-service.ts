import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/products/i-products-repository";

export class GetProductsService {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(): Promise<Product[]> {
		return this.productsRepository.getAll();
	}
}
