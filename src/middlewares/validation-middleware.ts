import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { z } from "zod";

export function validateBody(schema: z.ZodType): ValidationMiddleware {
	return validate(schema, "body");
}

export function validateParams(schema: z.ZodType): ValidationMiddleware {
	return validate(schema, "params");
}

function validate(schema: z.ZodType, type: "body" | "params"): ValidationMiddleware {
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

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
