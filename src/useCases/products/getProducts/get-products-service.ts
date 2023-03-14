import { Product } from "../../../models/Product";
import { IGetAllProductsRepository } from "../../../repositories";

export class GetProductsService {
	constructor(private getAllProductsRepository: IGetAllProductsRepository) {}

	async execute(): Promise<Product[]> {
		return this.getAllProductsRepository.getAll();
	}
}
