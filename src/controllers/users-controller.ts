import { Request, Response } from "express";
import httpStatus from "http-status";
import { User } from "../utils/protocols";
import { usersService } from "../services";

async function getUsers(req: Request, res: Response) {
	try {
		const users: User[] = await usersService.listUsers();
		return res.status(httpStatus.OK).send(users);
	} catch (error) {
		return res.sendStatus(error.response.status);
	}
}

export { getUsers };
