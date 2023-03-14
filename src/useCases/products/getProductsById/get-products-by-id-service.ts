import { Product } from "../../../models/Product";
import { GetProductByIdRepository } from "../../../repositories";

export class GetProductsByIdService {
	constructor(private getProductByIdRepository: GetProductByIdRepository) {}

	async execute(productsIds: number[]): Promise<Product[]> {
		return Promise.all(productsIds.map((id) => this.getProductByIdRepository.getById(id)));
	}
}
