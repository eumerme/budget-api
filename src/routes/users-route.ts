import { Router } from "express";
import { getUsersController } from "../useCases/users/getUsers";

const usersRouter = Router();

usersRouter.get("/users", (req, res) => {
	getUsersController.handle(req, res);
});

export { usersRouter };
