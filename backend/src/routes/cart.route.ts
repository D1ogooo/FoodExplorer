import express from "express";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { CartsController } from "../controllers/CartsController";
const Carts = new CartsController();
const CartRouter = express.Router();

CartRouter.post("/create", AuthMiddleWare, Carts.create);
CartRouter.post("/list", AuthMiddleWare, Carts.list);
CartRouter.post("/delete/:id", AuthMiddleWare,Carts.delete);

export { CartRouter };