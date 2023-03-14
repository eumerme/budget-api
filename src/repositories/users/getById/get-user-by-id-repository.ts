import axios, { AxiosResponse } from "axios";
import { User } from "../../../models/User";
import { baseURL } from "../../../utils/baseUrl";
import { IGetUserByIdRepository } from "./i-get-user-by-id-repository";

export class GetUserByIdRepository implements IGetUserByIdRepository {
	async getById(id: number): Promise<User> {
		const res: AxiosResponse<User> = await axios.get(`${baseURL}/users/${id}`);
		return res.data;
	}
}
