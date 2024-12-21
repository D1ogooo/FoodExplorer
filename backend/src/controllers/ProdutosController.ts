import { prisma } from "../lib/prisma";
import type { Response, Request } from "express";

class ProdutosController {
  async create(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token inválido" });
    }

    try {
      const { name, valor, sobre, ingredientes, categoria } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "Imagem não fornecida" });
      }

      const image = req.file.path;
       
      
      console.log(name,valor,sobre,ingredientes,categoria)
      
      await prisma.produtos.create({
        data: {
          name,
          valor: Number(valor),
          sobre,
          image,
          ingredientes: JSON.parse(ingredientes),
          categoria,
        },
      });
       console.log("Sucesso")
      res.status(201).json({ message: "Produto criado com sucesso!" });

    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      res.status(500).json({ error: "Erro interno ao criar o produto", details: error });
    }
  }
}

export { ProdutosController };
