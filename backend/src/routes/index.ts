import express from "express";
import { UsersRouter } from "./users.route";
import { ProductsRouter } from "./products.route";
import { CartRouter } from "./cart.route";
import { FavoritesRoute } from "./favorite.routes";
const route = express.Router();

route.use("/users", UsersRouter);
route.use("/produtos", ProductsRouter);
route.use("/favorito", FavoritesRoute);
route.use("/cart", CartRouter);

export { route };
