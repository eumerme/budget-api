import express from "express";
import cors from "cors";
import { router } from "./routes";

const server = express();
const port = 5000;

server
	.use(cors())
	.use(express.json())
	.get("/health", (_req, res) => res.send("OK!"))
	.use(router)
	.listen(port, () => console.log(`Server is listening on port ${port}`));
