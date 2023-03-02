import { ProductsRepository, UsersRepository } from "../../../repositories";
import { GetProductsByIdService } from "../../products/getProductsById/get-products-by-id-service";
import { GetUserByIdService } from "../../users/getUserById/get-user-by-id-service";
import { CreateBudgetController } from "./create-budget-controller";
import { CreateBudgetService } from "./create-budget-service";

const usersRepository = new UsersRepository();
const getUserByIdService = new GetUserByIdService(usersRepository);

const productsRepository = new ProductsRepository();
const getProductsByIdService = new GetProductsByIdService(productsRepository);

const createBudgetService = new CreateBudgetService(getUserByIdService, getProductsByIdService);
export const createBudgetController = new CreateBudgetController(createBudgetService);
