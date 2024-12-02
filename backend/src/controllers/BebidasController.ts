import type { Response, Request } from "express";
import { prisma } from "../lib/prisma";
import { jwtConfig } from "../configs/auth";
import path from "node:path";

class BebidasController {
	async create(req: Request, res: Response) {
		const authHeader = req.headers.authorization;
		const token = authHeader?.split(" ")[1];

		if (!token) {
			res.status(401).json({ error: "Token inválido" });
			return;
		}

		try {
			const { name, valor, sobre, ingredientes } = req.body;
			let image = req.file ? req.file.path : null;

			if (image) {
				const imageName = path.basename(image);
				image = `/uploads/${imageName}`;
			} else {
				res.status(401).json({ error: "Imagem não declarada" });
				return;
			}

			await prisma.Bebida.create({
				data: {
					name,
					valor,
					sobre,
					image,
					ingredientes,
				},
			});
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export { BebidasController };
