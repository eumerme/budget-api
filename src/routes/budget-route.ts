import { Router } from "express";
import { createBudgetController } from "../useCases/budget/createBudget";
//import { validateData } from "../middlewares";

const budgetRouter = Router();

budgetRouter.post("/budget/:id", (req, res) => {
	createBudgetController.handle(req, res);
});

export { budgetRouter };
