import { ProductsRepository } from "../../../repositories";
import { GetProductsController } from "./get-products-controller";
import { GetProductsService } from "./get-products-service";

const productsRepository = new ProductsRepository();
const getProductsService = new GetProductsService(productsRepository);
export const getProductsController = new GetProductsController(getProductsService);
