import express from "express";
import { UsersController } from "../controllers/UsersController";
import { RefeicoesController } from "../controllers/RefeicoesController";
import { CartsController } from "../controllers/CartsController";
import { FavoritosController } from "../controllers/FavoritosController";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
import { SobremesasController } from "../controllers/SobremesasController";
import { BebidasController } from "../controllers/BebidasController";
import { upload } from "../configs/multerConfig";
const route = express.Router();
const Users = new UsersController();
const Carts = new CartsController();
const Favorito = new FavoritosController();
const Refeicoes = new RefeicoesController();
const Sobremesas = new SobremesasController();
const Bebidas = new BebidasController();

//authenticação
route.post("/users/session", Users.auth); // rota de login
route.post("/users/create", Users.create); // rota de registro

//Refeições
route.post(
	"/pratos/refeicoes/create",
	upload.single("image"),
	AuthMiddleWare,
	Refeicoes.create,
); // rota para criar um prato

//Sobremesas
route.post(
	"/pratos/sobremesas/create",
	upload.single("image"),
	AuthMiddleWare,
	Sobremesas.create,
); // rota para criar um prato

//Bebidas
route.post(
	"/pratos/bebidas/create",
	upload.single("image"),
	AuthMiddleWare,
	Bebidas.create,
); // rota para criar um prato

//carrinho
route.post("/cart/create", AuthMiddleWare, Carts.create); // rota para adicionar um prato ao carrinho

//favoritos
route.post("/favorito/create", AuthMiddleWare, Favorito.create);

export { route };
