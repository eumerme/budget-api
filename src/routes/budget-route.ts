import { Router } from "express";
import { createBagde } from "../controllers";
import { validateData } from "../middlewares";

const budgetRouter = Router();

budgetRouter.post("/budget/:id", validateData, createBagde);

export { budgetRouter };
