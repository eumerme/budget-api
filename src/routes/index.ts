import { Router } from "express";
import { usersRouter } from "./users-route";
import { productsRouter } from "./products-route";
import { budgetRouter } from "./budget-route";

const router = Router();

router.use(usersRouter).use(productsRouter).use(budgetRouter);

export { router };
