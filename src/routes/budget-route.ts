import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation";
import { createBudgetBody, createBudgetParams } from "../schemas/budget-schema";
import { createBudgetController } from "../useCases/budget/createBudget";

const budgetRouter = Router();

budgetRouter.post(
	"/budget/:id",
	validateParams.handle(createBudgetParams),
	validateBody.handle(createBudgetBody),
	(req, res) => {
		createBudgetController.handle(req, res);
	}
);

export { budgetRouter };
