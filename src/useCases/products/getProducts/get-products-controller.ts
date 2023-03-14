import { Request, Response } from "express";
import httpStatus from "http-status";
import { Product } from "../../../models/Product";
import { GetProductsService } from "./get-products-service";

export class GetProductsController {
	constructor(private getProductsService: GetProductsService) {}

	async handle(_req: Request, res: Response): Promise<Response> {
		try {
			const products: Product[] = await this.getProductsService.execute();
			return res.status(httpStatus.OK).send(products);
		} catch (error) {
			return res.sendStatus(error.response.status);
		}
	}
}
