import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import { jwtConfig } from "../configs/auth";
import type { Response, Request } from "express";
import type { SinginRequest, SingUpRequest } from "../../@types/types";

class UsersController {
	async auth(req: Request<SinginRequest>, res: Response) {
		const { email, password } = req.body;
	  const emailExist = await prisma.user.findUnique({
			where: { email },
		});

		if (!emailExist) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

		const correctPassword = await bcrypt.compare(password, emailExist.password);
		if (!correctPassword) {
			return res.status(401).json({ error: "Senha inválida" });
		}

		const token = jwt.sign({ role: emailExist.role }, jwtConfig.secret, {
			expiresIn: jwtConfig.expiresIn,
		});
		const user = {
			email: emailExist.email,
			id: emailExist.id,
		};
		res.status(200).json({ token, user });
	}

	async create(req: Request<SingUpRequest>, res: Response) {
		const { name, email, password } = req.body;

		const userExists = await prisma.user.findUnique({
			where: { email },
		});

		if (userExists) {
			return res
				.status(401)
				.json({ error: "O email declarado já se encontra em uso" });
		}

		const encryptedPassword = await bcrypt.hash(password, 8);

		const createUser = await prisma.user.create({
			data: { name, email, password: encryptedPassword },
		});

		res.status(200).json({ createUser });
	}
}

export { UsersController };
