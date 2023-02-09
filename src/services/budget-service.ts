import { productsRepository, usersRepository } from "../repositories";
import { BudgetSchema } from "../schemas";

async function budget({ id, productsIds }: BudgetSchema) {
	const { tax } = await usersRepository.fetchUserById(id);

	const products = await Promise.all(productsIds.map((id) => productsRepository.fetchProductById(id)));
	const productsPrice = products.map(({ price }) => price);
	const productsTotal = productsPrice.reduce((total, value) => total + value, 0);

	return productsTotal * tax;
}

export const budgetService = { budget };
