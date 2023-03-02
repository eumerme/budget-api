import { User } from "../../../models/User";
import { IUsersRepository } from "../../../repositories/users/i-users-repository";

export class GetUsersService {
	constructor(private userRepository: IUsersRepository) {}

	async execute(): Promise<User[]> {
		return this.userRepository.getAll();
	}
}
