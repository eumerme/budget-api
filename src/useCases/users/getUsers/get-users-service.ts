import { User } from "../../../models/User";
import { UsersRepository } from "../../../repositories";

export class GetUsersService {
	constructor(private userRepository: UsersRepository) {}

	execute(): Promise<User[]> {
		return this.userRepository.getAll();
	}
}
