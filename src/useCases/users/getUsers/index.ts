import { UsersRepository } from "../../../repositories";
import { GetUsersController } from "./get-users-controller";
import { GetUsersService } from "./get-users-service";

const usersRepository = new UsersRepository();
const getUsersService = new GetUsersService(usersRepository);
export const getUsersController = new GetUsersController(getUsersService);
