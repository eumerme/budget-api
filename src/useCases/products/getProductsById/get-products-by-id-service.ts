import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/products/i-products-repository";

export class GetProductsByIdService {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(productsIds: number[]): Promise<Product[]> {
		return Promise.all(productsIds.map((id) => this.productsRepository.getById(id)));
	}
}
