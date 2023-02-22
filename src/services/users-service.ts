import { User } from "../utils/protocols";
import { usersRepository } from "../repositories";

async function listUsers(): Promise<User[]> {
	return usersRepository.fetchUsers();
}

async function getUserById(id: number): Promise<User> {
	return usersRepository.fetchUserById(id);
}

export const usersService = { listUsers, getUserById };
