import type { JwtPayload } from "jsonwebtoken";

export interface SinginRequest {
	email: string;
	password: string;
}

export interface SingUpRequest {
	name: string;
	email: string;
	password: string;
}

export interface CustomJwtPayload extends JwtPayload {
  id: string;
}