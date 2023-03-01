import { User } from "../utils/protocols";
//import { usersRepository } from "../repositories";

async function listUsers() {
	//return usersRepository.fetchUsers();
}

async function getUserById(id: number) {
	//return usersRepository.fetchUserById(id);
}

export const usersService = { listUsers, getUserById };
