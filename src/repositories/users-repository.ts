import axios from "axios";
import { baseURL } from "../utils/baseUrl";

async function fetchUsers(): Promise<User[]> {
	const res = await axios.get(`${baseURL}/users`);
	return res.data;
}

async function fetchUserById(id: number): Promise<User> {
	const res = await axios.get(`${baseURL}/users/${id}`);
	return res.data;
}

export type User = { id: number; name: string; tax: number };

export const usersRepository = { fetchUsers, fetchUserById };
