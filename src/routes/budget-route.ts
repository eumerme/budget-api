import { Router } from "express";
import { createBudget } from "../controllers";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { budgetSchemaBody, budgetSchemaParams } from "../schemas";

const budgetRouter = Router();

budgetRouter.post("/budget/:id", validateBody(budgetSchemaBody), validateParams(budgetSchemaParams), createBudget);

export { budgetRouter };
