import { Router } from "express";
import { createBudget } from "../controllers";
import { validateData } from "../middlewares";

const budgetRouter = Router();

budgetRouter.post("/budget/:id", validateData, createBudget);

export { budgetRouter };
