import { Product } from "../../models/Product";

export interface IProductsRepository {
	getAll(): Promise<Product[]>;
	getById(id: number): Promise<Product>;
}
