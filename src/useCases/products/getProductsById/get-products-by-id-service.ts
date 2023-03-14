import { Product } from "../../../models/Product";
import { IGetProductByIdRepository } from "../../../repositories";

export class GetProductsByIdService {
	constructor(private getProductByIdRepository: IGetProductByIdRepository) {}

	async execute(productsIds: number[]): Promise<Product[]> {
		return Promise.all(productsIds.map((id) => this.getProductByIdRepository.getById(id)));
	}
}
