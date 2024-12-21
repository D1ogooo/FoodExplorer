import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/auth";
import type { Request, Response, NextFunction } from "express";

function AuthMiddleWare(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(" ")[1] as string;

	try {
		jwt.verify(token, jwtConfig.secret);
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token não authorizado" });
	}
}

export { AuthMiddleWare };
