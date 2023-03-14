import { GetAllUsersRepository } from "../../../repositories";
import { GetUsersController } from "./get-users-controller";
import { GetUsersService } from "./get-users-service";

const getAllUsersRepository = new GetAllUsersRepository();
const getUsersService = new GetUsersService(getAllUsersRepository);
export const getUsersController = new GetUsersController(getUsersService);
