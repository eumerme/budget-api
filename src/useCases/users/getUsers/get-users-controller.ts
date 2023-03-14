import { Request, Response } from "express";
import httpStatus from "http-status";
import { User } from "../../../models/User";
import { GetUsersService } from "./get-users-service";

export class GetUsersController {
	constructor(private getUsersService: GetUsersService) {}

	async handle(_req: Request, res: Response): Promise<Response> {
		try {
			const users: User[] = await this.getUsersService.execute();
			return res.status(httpStatus.OK).send(users);
		} catch (error) {
			return res.sendStatus(error.response.status);
		}
	}
}
