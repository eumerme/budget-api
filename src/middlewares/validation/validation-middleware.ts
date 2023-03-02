import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { z } from "zod";

export class ValidationMiddleware {
	private static INSTANCE: ValidationMiddleware;

	private constructor() {}

	public static getInstance() {
		if (!this.INSTANCE) this.INSTANCE = new ValidationMiddleware();
		return this.INSTANCE;
	}

	execute(schema: z.ZodType, type: "body" | "params") {
		return (req: Request, res: Response, next: NextFunction) => {
			try {
				schema.parse(req[type]);

				next();
			} catch (error) {
				if (error instanceof z.ZodError) {
					return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.issues);
				}
				return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
			}
		};
	}
}
