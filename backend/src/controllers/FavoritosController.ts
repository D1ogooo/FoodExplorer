import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Response, Request } from "express";
import { jwtConfig } from "../configs/auth";
import { prisma } from "../lib/prisma";

class FavoritosController {
	async create(req: Request, res: Response) {
		try {
			const { id } = req.body;

			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				res.status(401).json({ message: "Acesso negado" });
				return;
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as JwtPayload;

			const existFavorite = await prisma.favorite.findUnique({
				where: {
					userId_produtosId: {
						userId: decoded.id,
						produtosId: id,
					}
				},
			})

			if (existFavorite) {
				await prisma.favorite.delete({
					where: {
						userId_produtosId: {
							userId: decoded.id,
							produtosId: id,
						}
					},
				});

				const productExist = await prisma.produtos.findUnique({
					where: {
						id,
					},
				});

				if(productExist) {
					await prisma.produtos.update({
						where: {
							id
						},
						data: {
							favoriteItem: productExist.favoriteItem === true ? false : true
						},
					});
				}

			}

			await prisma.favorite.create({
				data: {
					userId: decoded.id,
					produtosId: id,
				},
			});

			// await prisma.produtos.update({
			// 	where: {
			// 	 id
			// 	},
			// 	data: {
            //      favoriteItem: favoriteItem === true ? false : true
			// 	},
			// });

			res.status(201).json({ "sucesso!": "produto adicionado aos favoritos" });
		} catch (error) {
			console.log(error)
			res.status(401).json({ "error": "falha ao favoritar" });
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				res.status(401).json({ message: "Acesso negado" });
				return;
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as JwtPayload;

			const favoriteUserDelete = await prisma.favorite.delete({
				where: {
					userId_produtosId: {
						userId: decoded.id,
						produtosId: id,
					}
				},
			});
			res.status(201).json({ "sucesso!": "produto adicionado aos favoritos" });
		} catch (error) {
			res.status(401).json({ error: "falha ao desfavoritar" });
		}
	}

	async list(req: Request, res: Response) {
		try {
			const authHeader = req.headers.authorization;
			const token = authHeader?.split(" ")[1];

			if (!token) {
				res.status(401).json({ message: "Acesso negado" });
				return;
			}

			const decoded = jwt.verify(token, jwtConfig.secret) as JwtPayload;
			const favorites = await prisma.favorite.findMany({
				where: {
					userId: decoded.id,
				},
				include: {
					produtos: true,
				},
			});

			res.status(200).json({ favorites });
		} catch (error) {
			res.status(401).json({ error: "falha ao listar favoritos" });
		}
	}
}

export { FavoritosController };
