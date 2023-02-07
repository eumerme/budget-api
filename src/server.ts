import express from "express";
import cors from "cors";

const server = express();

const port = process.env.PORT || 4000;

server
	.use(cors())
	.use(express.json())
	.listen(process.env.PORT, () => console.log(`Server is listening on port ${port}`));
