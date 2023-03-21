import { z } from "zod";
import { ValidationMiddleware } from "./validation-middleware";

export class ValidateParams {
	constructor(private validationMiddleware: ValidationMiddleware) {}

	handle(schema: z.ZodType) {
		return this.validationMiddleware.execute(schema, "params");
	}
}