import { faker } from "@faker-js/faker";
import { Product } from "../../src/utils/protocols";

export function products(): Product[] {
	return [
		{
			id: 1,
			name: faker.name.fullName(),
			price: faker.datatype.number({ min: 10, max: 15000 }),
		},
		{
			id: 2,
			name: faker.name.fullName(),
			price: faker.datatype.number({ min: 10, max: 15000 }),
		},
	];
}
