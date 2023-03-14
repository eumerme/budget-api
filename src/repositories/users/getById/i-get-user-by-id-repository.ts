import { User } from "../../../models/User";

export interface IGetUserByIdRepository {
	getById(id: number): Promise<User>;
}
