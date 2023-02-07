import { User, usersRepository } from "../repositories";

async function listUsers(): Promise<User[]> {
	return await usersRepository.fetchUsers();
}

export const usersService = { listUsers };
