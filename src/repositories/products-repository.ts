import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";
import { baseURL } from "../utils/baseUrl";

export class ProductsRepository {
	async getAll(): Promise<Product[]> {
		const res: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
		return res.data;
	}

	async getById(id: number): Promise<Product> {
		const res: AxiosResponse<Product> = await axios.get(`${baseURL}/products/${id}`);
		return res.data;
	}
}
