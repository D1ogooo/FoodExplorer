import express from "express";
import { UsersController } from "../controllers/UsersController";
import { ProdutosController } from "../controllers/ProdutosController";
import { CartsController } from "../controllers/CartsController";
import { FavoritosController } from "../controllers/FavoritosController";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { upload } from "../configs/uploadConfig";
const route = express.Router();
const Users = new UsersController();
const Carts = new CartsController();
const Favorito = new FavoritosController();
const Produtos = new ProdutosController();

//authenticação
route.post("/users/session", Users.auth); // rota de login
route.post("/users/create", Users.create); // rota de registro

//Produtos
route.post(
	"/produtos/create",
	upload.single("image"),
	AuthMiddleWare,
	Produtos.create,
); // rota para criar um prato

//carrinho
route.post("/cart/create", AuthMiddleWare, Carts.create);

//favoritos
route.post("/favorito/create", AuthMiddleWare, Favorito.create);

export { route };
