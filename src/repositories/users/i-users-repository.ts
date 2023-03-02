import { User } from "../../models/User";

export interface IUsersRepository {
	getAll(): Promise<User[]>;
	getById(id: number): Promise<User>;
}
