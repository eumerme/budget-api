import axios, { AxiosResponse } from "axios";
import { Product } from "../../../models/Product";
import { baseURL } from "../../../utils/baseUrl";
import { IGetAllProductsRepository } from "./i-get-all-products-repository";

export class GetAllProductsRepository implements IGetAllProductsRepository {
	async getAll(): Promise<Product[]> {
		const res: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
		return res.data;
	}
}
