import { z } from "zod";

export const createBudgetParams = z
	.object({
		id: z.coerce.number().positive(),
	})
	.required();

export const createBudgetBody = z
	.object({
		productsIds: z.number().positive().array().min(1),
	})
	.required();
