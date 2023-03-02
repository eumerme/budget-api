import { User } from "../../../models/User";
import { UsersRepository } from "../../../repositories";

export class GetUserByIdService {
	constructor(private usersRepository: UsersRepository) {}

	async execute(id: number): Promise<User> {
		return this.usersRepository.getById(id);
	}
}
