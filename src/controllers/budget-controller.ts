import { Request, Response } from "express";
import httpStatus from "http-status";
import { PostBudgetSchema } from "../schemas";
import { budgetService } from "../services";

async function createBudget(req: Request, res: Response) {
	const { id, productsIds }: PostBudgetSchema = res.locals;

	try {
		const total: number = await budgetService.budget({ id, productsIds });
		return res.status(httpStatus.OK).send({ total });
	} catch (error) {
		return res.sendStatus(error.response.status);
	}
}

export { createBudget };
