import { User } from "../../../models/User";
import { IGetUserByIdRepository } from "../../../repositories";

export class GetUserByIdService {
	constructor(private getUserByIdRepository: IGetUserByIdRepository) {}

	async execute(id: number): Promise<User> {
		return this.getUserByIdRepository.getById(id);
	}
}
