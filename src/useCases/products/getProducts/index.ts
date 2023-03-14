import { GetAllProductsRepository } from "../../../repositories/products/getAll/get-all-products-repository";
import { GetProductsController } from "./get-products-controller";
import { GetProductsService } from "./get-products-service";

const getAllProductsRepository = new GetAllProductsRepository();
const getProductsService = new GetProductsService(getAllProductsRepository);
export const getProductsController = new GetProductsController(getProductsService);
