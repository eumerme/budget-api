import { User } from "../../../models/User";

export interface IGetAllUsersRepository {
	getAll(): Promise<User[]>;
}
