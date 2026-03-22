import express from "express";
import { UsersController } from "../controllers/UsersController";
const Users = new UsersController();
const UsersRouter = express.Router();

UsersRouter.post("/session", Users.auth);
UsersRouter.post("/create", Users.create);

export { UsersRouter };