import { ValidateBody } from "./validate-body";
import { ValidateParams } from "./validate-params";
import { ValidationMiddleware } from "./validation-middleware";

const validationMiddleware = ValidationMiddleware.getInstance();
export const validateParams = new ValidateParams(validationMiddleware);
export const validateBody = new ValidateBody(validationMiddleware);
