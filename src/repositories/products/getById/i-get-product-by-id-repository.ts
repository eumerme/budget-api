import { Product } from "../../../models/Product";

export interface IGetProductByIdRepository {
	getById(id: number): Promise<Product>;
}
