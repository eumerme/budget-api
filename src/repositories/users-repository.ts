import axios, { AxiosResponse } from "axios";
import { User } from "../models/User";
import { baseURL } from "../utils/baseUrl";

export class UsersRepository {
	async getAll(): Promise<User[]> {
		const res: AxiosResponse<User[]> = await axios.get(`${baseURL}/users`);
		return res.data;
	}

	async getById(id: number): Promise<User> {
		const res: AxiosResponse<User> = await axios.get(`${baseURL}/users/${id}`);
		return res.data;
	}
}
