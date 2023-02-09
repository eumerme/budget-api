import { z } from "zod";

export const budgetSchema = z
	.object({
		id: z.coerce.number().positive(),
		productsIds: z.number().positive().array().nonempty(),
	})
	.required();

export type BudgetSchema = z.infer<typeof budgetSchema>;
