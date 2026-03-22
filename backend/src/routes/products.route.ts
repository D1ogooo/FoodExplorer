import express from "express";
import { ProdutosController } from "../controllers/ProdutosController";
import { AuthorizationMiddleWare } from "../middlewares/AuthorizationMiddleware";
import { upload } from "../configs/uploadConfig";
import { AuthMiddleWare } from "../middlewares/AuthMiddleware";
const Produtos = new ProdutosController();
const ProductsRouter = express.Router();

ProductsRouter.post("/create",
    upload.single("image"),
	AuthMiddleWare,
	AuthorizationMiddleWare,
    Produtos.create
);

ProductsRouter.get("/show",
    AuthMiddleWare,
    Produtos.show
);

ProductsRouter.get("/find/:id", 
    AuthMiddleWare, 
    Produtos.find
);

ProductsRouter.put("/update/:id",     
    upload.single("image"),
    AuthMiddleWare,
    AuthorizationMiddleWare,
    Produtos.update
);

ProductsRouter.delete("/delete/:id",     
    AuthMiddleWare,
    AuthorizationMiddleWare,
    Produtos.delete,
);

ProductsRouter.put("/update/:id",     
    upload.single("image"),
    AuthMiddleWare,
    AuthorizationMiddleWare,
    Produtos.update
);

export { ProductsRouter };