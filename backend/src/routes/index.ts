import express from "express";
import { UsersController } from "../controllers/UsersController";
import { ProdutosController } from "../controllers/ProdutosController";
import { CartsController } from "../controllers/CartsController";
import { FavoritosController } from "../controllers/FavoritosController";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { upload } from "../configs/uploadConfig";
import { AuthorizationMiddleWare } from "../middlewares/AuthorizationMiddleware";
const route = express.Router();
const Users = new UsersController();
const Carts = new CartsController();
const Favorito = new FavoritosController();
const Produtos = new ProdutosController();

route.post("/users/session", Users.auth); 
route.post("/users/create", Users.create); 

route.post(
	"/produtos/create",
	upload.single("image"),
	AuthMiddleWare,
	AuthorizationMiddleWare,
	Produtos.create,
); 

route.delete(
 "/produtos/delete/:id",
 AuthMiddleWare,
 AuthorizationMiddleWare,
 Produtos.delete,
); 

route.put(
	"/produtos/update/:id",
	upload.single("image"),
	AuthMiddleWare,
	AuthorizationMiddleWare,
	Produtos.update,
);

route.get("/produtos/show", AuthMiddleWare, Produtos.show);
route.get("/produtos/find/:id", AuthMiddleWare, Produtos.find);

route.post("/cart/create", AuthMiddleWare, Carts.create);
route.get("/cart/list", AuthMiddleWare, Carts.list);
route.delete("/cart/delete/:id", AuthMiddleWare, Carts.delete);

route.get("/favorito/list", AuthMiddleWare, Favorito.list);
route.post("/favorito/create", AuthMiddleWare, Favorito.create);
route.delete("/favorito/delete/:id", AuthMiddleWare, Favorito.delete);

export { route };
