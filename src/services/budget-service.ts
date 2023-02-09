import { BudgetSchema } from "../schemas";

async function budget({ id, productsIds }: BudgetSchema) {}

export const budgetService = { budget };
