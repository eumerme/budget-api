import { z } from "zod";

export const budgetSchema = z
	.object({
		id: z.coerce.number().positive(),
		productsIds: z.number().positive().array().min(1),
	})
	.required();

export type PostBudgetSchema = z.infer<typeof budgetSchema>;
