import { configDotenv } from "dotenv";
configDotenv();

if (!process.env.JWT_KEY) {
	throw new Error("Key inexistente");
}

const jwtConfig = {
	secret: process.env.JWT_KEY,
	expiresIn: "1d",
};

export { jwtConfig };
