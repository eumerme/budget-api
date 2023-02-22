import { Product } from "../utils/protocols";
import { productsRepository } from "../repositories";

async function listProducts(): Promise<Product[]> {
	return productsRepository.fetchProducts();
}

async function listProductsById(productsIds: number[]): Promise<Product[]> {
	return Promise.all(productsIds.map((id) => productsRepository.fetchProductById(id)));
}

export const productsService = { listProducts, listProductsById };
