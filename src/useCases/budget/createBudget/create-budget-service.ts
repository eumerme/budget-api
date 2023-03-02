import { Product } from "../../../models/Product";
import { GetProductsByIdService } from "../../products/getProductsById/get-products-by-id-service";
import { GetUserByIdService } from "../../users/getUserById/get-user-by-id-service";

interface ICreateBudget {
	id: number;
	productsIds: number[];
}

export class CreateBudgetService {
	constructor(private getUserByIdService: GetUserByIdService, private getProductsByIdService: GetProductsByIdService) {}

	async execute({ id, productsIds }: ICreateBudget): Promise<number> {
		const { tax } = await this.getUserByIdService.execute(id);

		const products: Product[] = await this.getProductsByIdService.execute(productsIds);
		const productsPrices: number[] = products.map(({ price }) => price);
		const productsTotal: number = productsPrices.reduce((total, price) => total + price, 0);

		return productsTotal * tax;
	}
}
