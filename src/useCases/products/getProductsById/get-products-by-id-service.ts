import { Product } from "../../../models/Product";
import { ProductsRepository } from "../../../repositories";

export class GetProductsByIdService {
	constructor(private productsRepository: ProductsRepository) {}

	async execute(productsIds: number[]): Promise<Product[]> {
		return Promise.all(productsIds.map((id) => this.productsRepository.getById(id)));
	}
}
