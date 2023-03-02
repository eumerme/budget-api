import axios, { AxiosResponse } from "axios";
import { User } from "../../models/User";
import { baseURL } from "../../utils/baseUrl";
import { IUsersRepository } from "./i-users-repository";

export class UsersRepository implements IUsersRepository {
	async getAll(): Promise<User[]> {
		const res: AxiosResponse<User[]> = await axios.get(`${baseURL}/users`);
		return res.data;
	}

	async getById(id: number): Promise<User> {
		const res: AxiosResponse<User> = await axios.get(`${baseURL}/users/${id}`);
		return res.data;
	}
}
