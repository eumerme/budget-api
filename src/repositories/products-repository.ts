import axios, { AxiosResponse } from "axios";
import { Product } from "../utils/protocols";
import { baseURL } from "../utils/baseUrl";

async function fetchProducts(): Promise<Product[]> {
	const res: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
	return res.data;
}

async function fetchProductById(id: number): Promise<Product> {
	const res: AxiosResponse<Product> = await axios.get(`${baseURL}/products/${id}`);
	return res.data;
}

export const productsRepository = { fetchProducts, fetchProductById };
