import { productsRepository } from "../repositories";

async function listProducts() {
	return await productsRepository.fetchProducts();
}

export const productsService = { listProducts };
