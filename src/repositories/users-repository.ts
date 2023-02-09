import axios from "axios";

async function fetchUsers(): Promise<User[]> {
	const res = await axios.get("https://mockend.com/juunegreiros/BE-test-api/users");
	return res.data;
}

export type User = { id: number; name: string; tax: number };

export const usersRepository = { fetchUsers };
