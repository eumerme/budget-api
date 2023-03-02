import { Product } from "../../../models/Product";
import { ProductsRepository } from "../../../repositories";

export class GetProductsService {
	constructor(private productsRepository: ProductsRepository) {}

	async execute(): Promise<Product[]> {
		return this.productsRepository.getAll();
	}
}
