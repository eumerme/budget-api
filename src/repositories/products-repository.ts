import axios from "axios";

async function fetchProducts(): Promise<Product[]> {
	const res = await axios.get("https://mockend.com/juunegreiros/BE-test-api/products");
	return res.data;
}

export type Product = { id: number; name: string; price: number };

export const productsRepository = { fetchProducts };