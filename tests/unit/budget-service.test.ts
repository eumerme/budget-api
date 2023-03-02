import { ProductsRepository, UsersRepository } from "../../src/repositories";
import { CreateBudgetService } from "../../src/useCases/budget/createBudget/create-budget-service";
import { GetProductsByIdService } from "../../src/useCases/products/getProductsById/get-products-by-id-service";
import { GetUserByIdService } from "../../src/useCases/users/getUserById/get-user-by-id-service";
import { products, user } from "../factories";

describe("CreateBudgetService", () => {
	it("Should return the user's budget based on their tax and product prices", async () => {
		const usersRepository = new UsersRepository();
		const getUserByIdService = new GetUserByIdService(usersRepository);

		const productsRepository = new ProductsRepository();
		const getProductsByIdService = new GetProductsByIdService(productsRepository);

		const createBudgetService = new CreateBudgetService(getUserByIdService, getProductsByIdService);

		jest.spyOn(getUserByIdService, "execute").mockImplementationOnce(async () => {
			return user();
		});

		jest.spyOn(getProductsByIdService, "execute").mockImplementationOnce(async () => {
			return products();
		});

		const budget = await createBudgetService.execute({
			id: 1,
			productsIds: [1, 2],
		});

		expect(budget).toBeGreaterThan(0);
	});
});
