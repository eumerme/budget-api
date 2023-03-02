import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateBudgetService } from "./create-budget-service";

export interface ICreateBudget {
	id: number;
	productsIds: number[];
}

export class CreateBudgetController {
	constructor(private createBudgetService: CreateBudgetService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		//		const { id, productsIds }: ICreateBudget = res.locals.budget;

		const id: number = Number(req.params.id);
		const productsIds: number[] = req.body.productsIds;

		try {
			const total: number = await this.createBudgetService.execute({ id, productsIds });
			return res.status(httpStatus.OK).send({ total });
		} catch (error) {
			return res.sendStatus(error.response.status);
		}
	}
}
