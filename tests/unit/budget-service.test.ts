import { budgetService, productsService, usersService } from "../../src/services";
import { products, user } from "../factories";

describe("Budget Service", () => {
	it("Should return the user's budget based on their tax and product prices", async () => {
		jest.spyOn(usersService, "getUserById").mockImplementationOnce(async () => {
			return user();
		});

		jest.spyOn(productsService, "listProductsById").mockImplementationOnce(async () => {
			return products();
		});

		const budget = await budgetService.budget({
			id: 1,
			productsIds: [1, 2],
		});

		expect(budget).toBeGreaterThan(0);
	});
});
