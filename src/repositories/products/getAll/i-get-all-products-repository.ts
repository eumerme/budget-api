import { Product } from "../../../models/Product";

export interface IGetAllProductsRepository {
	getAll(): Promise<Product[]>;
}
