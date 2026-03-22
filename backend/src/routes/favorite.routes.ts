import express from "express";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { FavoritosController } from "../controllers/FavoritosController";
const Favorito = new FavoritosController();
const FavoritesRoute = express.Router();

FavoritesRoute.post("/create", AuthMiddleWare, Favorito.create);
FavoritesRoute.get("/list", AuthMiddleWare, Favorito.list);
FavoritesRoute.delete("/delete/:id", AuthMiddleWare, Favorito.delete);

export { FavoritesRoute };