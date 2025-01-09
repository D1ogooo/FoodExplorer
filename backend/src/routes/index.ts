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

route.get("/produtos/show", AuthMiddleWare, Produtos.show);

route.get("/produtos/find/:id", AuthMiddleWare, Produtos.find);

//carrinho
route.post("/cart/create", AuthMiddleWare, Carts.create);
route.get("/cart/list", AuthMiddleWare, Carts.list);
route.delete("/cart/delete", AuthMiddleWare, Carts.delete);

//favoritos
route.get("/favorito/list", AuthMiddleWare, Favorito.list);
route.post("/favorito/create", AuthMiddleWare, Favorito.create);
route.delete("/favorito/delete/:id", AuthMiddleWare, Favorito.delete);

export { route };
