import express from "express";
import { UsersController } from "../controllers/UsersController";
import { PratosController } from "../controllers/PratosController";
import { CartsController } from "../controllers/CartsController";
import { FavoritosController } from "../controllers/FavoritosController";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
const route = express.Router();
const Users = new UsersController();
const Pratos = new PratosController();
const Carts = new CartsController();
const Favorito = new FavoritosController();

//authenticação
route.post("/users/session", Users.auth); // rota de login
route.post("/users/create", Users.create); // rota de registro

//pratos
route.post("/pratos/create", AuthMiddleWare, Pratos.create); // rota para criar um prato

//carrinho
route.post("/cart/create", AuthMiddleWare, Carts.create); // rota para adicionar um prato ao carrinho

//favoritos
route.post("/favorito/create", AuthMiddleWare, Favorito.create);

export { route };
