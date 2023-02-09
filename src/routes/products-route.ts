import { Router } from "express";
import { getProducts } from "../controllers";

const productsRouter = Router();

productsRouter.get("/products", getProducts);

export { productsRouter };
