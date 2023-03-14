import { Product } from "../../../models/Product";
import { GetAllProductsRepository } from "../../../repositories/products/getAll/get-all-products-repository";
import { IProductsRepository } from "../../../repositories/products/i-products-repository";

export class GetProductsService {
	constructor(private getAllProductsRepository: GetAllProductsRepository) {}

	async execute(): Promise<Product[]> {
		return this.getAllProductsRepository.getAll();
	}
}
