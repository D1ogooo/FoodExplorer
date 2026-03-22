import express from "express";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { FavoritosController } from "../controllers/FavoritosController";
const Favorito = new FavoritosController();
const FavoritesRoute = express.Router();

FavoritesRoute.post("/favorito/create", AuthMiddleWare, Favorito.create);
FavoritesRoute.get("/favorito/list", AuthMiddleWare, Favorito.list);
FavoritesRoute.delete("/favorito/delete/:id", AuthMiddleWare, Favorito.delete);

export { FavoritesRoute };