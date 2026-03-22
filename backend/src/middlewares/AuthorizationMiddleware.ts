import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtConfig } from "../configs/auth";
import type { Request, Response, NextFunction } from "express";

function AuthorizationMiddleWare(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(" ")[1] as string;

	try {
		const verify = jwt.verify(token, jwtConfig.secret as string) as JwtPayload & {
            role: string
        };

        if (verify.role === "admin") {
            next();
        } else {
			return res.status(401).json({ error: "Acesso negado" });
		}
	} catch (error) {
		return res.status(401).json({ error: "Acesso negado" });
	}
}

export { AuthorizationMiddleWare };
