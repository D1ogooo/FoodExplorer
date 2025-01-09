import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/auth";
import type { Response, Request } from "express";
import { prisma } from "../lib/prisma";
import type { CustomJwtPayload } from "../../@types/types";

class CartsController {
	async create(req: Request, res: Response) {
		try {
			const { id, quantity } = req.body;
			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				return res.status(401).json({ error: "Acesso negado" });
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as CustomJwtPayload;

			let verifyCart = await prisma.cart.findFirst({
				where: {
					userId: decoded.id,
				},
			});

			if (!verifyCart) {
				verifyCart = await prisma.cart.create({
					data: {
						userId: decoded.id,
					},
				});
			}

			const createProductCart = await prisma.cartItem.create({
				data: {
					cartId: verifyCart.id,
					produtosId: id,
					quantity,
				},
			});

			res.status(200).json({ createProductCart });
		} catch (error) {
			res.status(400).json({ error: "Falha ao adicionar ao carrinho" });
		}
	}

	async list(req: Request, res: Response) {
		try {
			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				return res.status(401).json({ error: "Acesso negado" });
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as CustomJwtPayload;

			const itensList = await prisma.cart.findMany({
				where: { userId: decoded.id },
				include: {
					items: {
						include: {
							produtos: true,
						},
					},
				},
			});
			res.status(200).json({ itensList });
		} catch (error) {
			res.status(400).json({ error: "Falha ao listar carrinho" });
		}
	}

	async delete(req: Request, res: Response) {
		try {
      const { id } = req.params;

			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				return res.status(401).json({ error: "Acesso negado" });
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as CustomJwtPayload;
      
			await prisma.cartItem.delete({
			 where: {
				id: id
			 }
			})

      res.status(200).json({ "sucesso!": "Produto deletado" })
		} catch (error) {
			console.log(error)
			res.status(400).json({ error: "Falha ao deletar produto" });
		}
	}
}

export { CartsController };
