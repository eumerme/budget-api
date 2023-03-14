import axios, { AxiosResponse } from "axios";
import { User } from "../../../models/User";
import { baseURL } from "../../../utils/baseUrl";
import { IGetAllUsersRepository } from "./i-get-all-users-repository";

export class GetAllUsersRepository implements IGetAllUsersRepository {
	async getAll(): Promise<User[]> {
		const res: AxiosResponse<User[]> = await axios.get(`${baseURL}/users`);
		return res.data;
	}
}
