import { Request, Response } from "express";
import httpStatus from "http-status";
import { Product } from "../utils/protocols";
import { productsService } from "../services";

async function getProducts(req: Request, res: Response) {
	try {
		const products: Product[] = await productsService.listProducts();
		return res.status(httpStatus.OK).send(products);
	} catch (error) {
		return res.sendStatus(error.response.status);
	}
}

export { getProducts };
