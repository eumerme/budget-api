import axios from "axios";
import { baseURL } from "../utils/baseUrl";

async function fetchProducts(): Promise<Product[]> {
	const res = await axios.get(`${baseURL}/products`);
	return res.data;
}

async function fetchProductById(id: number): Promise<Product> {
	const res = await axios.get(`${baseURL}/products/${id}`);
	return res.data;
}

export type Product = { id: number; name: string; price: number };

export const productsRepository = { fetchProducts, fetchProductById };
