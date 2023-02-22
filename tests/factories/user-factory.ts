import { faker } from "@faker-js/faker";
import { User } from "../../src/utils/protocols";

export function user(): User {
	return {
		id: 1,
		name: faker.name.firstName(),
		tax: faker.datatype.number({ min: 10, max: 200 }),
	};
}
