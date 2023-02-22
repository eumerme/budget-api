import axios, { AxiosResponse } from "axios";
import { User } from "../utils/protocols";
import { baseURL } from "../utils/baseUrl";

async function fetchUsers(): Promise<User[]> {
	const res: AxiosResponse<User[]> = await axios.get(`${baseURL}/users`);
	return res.data;
}

async function fetchUserById(id: number): Promise<User> {
	const res: AxiosResponse<User> = await axios.get(`${baseURL}/users/${id}`);
	return res.data;
}

export const usersRepository = { fetchUsers, fetchUserById };
