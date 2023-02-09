import { Request, Response } from "express";
import httpStatus from "http-status";
import { usersService } from "../services";

async function getUsers(req: Request, res: Response) {
	try {
		const users = await usersService.listUsers();
		return res.status(httpStatus.OK).send(users);
	} catch (error) {
		return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
	}
}

export { getUsers };
