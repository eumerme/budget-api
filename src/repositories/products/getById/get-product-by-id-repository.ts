import axios, { AxiosResponse } from "axios";
import { Product } from "../../../models/Product";
import { baseURL } from "../../../utils/baseUrl";
import { IGetProductByIdRepository } from "./i-get-product-by-id-repository";

export class GetProductByIdRepository implements IGetProductByIdRepository {
	async getById(id: number): Promise<Product> {
		const res: AxiosResponse<Product> = await axios.get(`${baseURL}/products/${id}`);
		return res.data;
	}
}
