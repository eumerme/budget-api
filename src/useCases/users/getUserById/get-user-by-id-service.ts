import { User } from "../../../models/User";
import { IUsersRepository } from "../../../repositories/users/i-users-repository";

export class GetUserByIdService {
	constructor(private usersRepository: IUsersRepository) {}

	async execute(id: number): Promise<User> {
		return this.usersRepository.getById(id);
	}
}
