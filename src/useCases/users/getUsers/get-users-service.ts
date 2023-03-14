import { User } from "../../../models/User";
import { IGetAllUsersRepository } from "../../../repositories";

export class GetUsersService {
	constructor(private getAllUsersRepository: IGetAllUsersRepository) {}

	async execute(): Promise<User[]> {
		return this.getAllUsersRepository.getAll();
	}
}
