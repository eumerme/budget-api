import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { z } from "zod";
import { PostBudgetSchema, budgetSchema } from "../schemas";

export function validateData(req: Request, res: Response, next: NextFunction) {
	try {
		const { id, productsIds }: PostBudgetSchema = budgetSchema.parse({
			id: req.params.id,
			productsIds: req.body.productsIds,
		});
		res.locals = { id, productsIds };
		next();
	} catch (error) {
		if (error instanceof z.ZodError) {
			return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.issues);
		}
		return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
	}
}
