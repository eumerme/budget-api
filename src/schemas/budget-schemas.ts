import { z } from "zod";

export const budgetSchemaParams = z
	.object({
		id: z.coerce.number().positive(),
	})
	.required();

export const budgetSchemaBody = z
	.object({
		productsIds: z.number().positive().array().min(1),
	})
	.required();

export type PostBudgetSchema = {
	id: number;
	productsIds: number[];
};
