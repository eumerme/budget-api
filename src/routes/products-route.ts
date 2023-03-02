import { Router } from "express";
import { getProductsController } from "../useCases/products/getProducts";

const productsRouter = Router();

productsRouter.get("/products", (req, res) => {
	getProductsController.handle(req, res);
});

export { productsRouter };
