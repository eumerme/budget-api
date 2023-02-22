import { Product } from "../utils/protocols";
import { PostBudgetSchema } from "../schemas";
import { productsService } from "./products-service";
import { usersService } from "./users-service";

async function budget({ id, productsIds }: PostBudgetSchema): Promise<number> {
	const { tax } = await usersService.getUserById(id);

	const products: Product[] = await productsService.listProductsById(productsIds);
	const productsPrices: number[] = products.map(({ price }) => price);
	const productsTotal: number = productsPrices.reduce((total, price) => total + price, 0);

	return productsTotal * tax;
}

export const budgetService = { budget };
