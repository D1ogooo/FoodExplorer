import type { Response, Request } from "express";
import { prisma } from "../lib/prisma";
import { jwtConfig } from "../configs/auth";

class CartsController {
	async create(req: Request, res: Response) {}
}

export { CartsController };
