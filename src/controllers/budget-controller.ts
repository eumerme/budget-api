import { Request, Response } from "express";
import httpStatus from "http-status";
import { BudgetSchema } from "../schemas";
import { budgetService } from "../services";

async function createBagde(req: Request, res: Response) {
	const { id, productsIds }: BudgetSchema = res.locals;

	try {
		const total = await budgetService.budget({ id, productsIds });
		return res.status(httpStatus.OK).send({ total });
	} catch (error) {
		return res.sendStatus(error.response.status);
	}
}

export { createBagde };
