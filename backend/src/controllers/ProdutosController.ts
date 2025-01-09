import { prisma } from "../lib/prisma";
import type { Response, Request } from "express";

class ProdutosController {
  async create(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Acesso negado" });
    }

    try {
      const { name, valor, sobre, ingredientes, categoria } = req.body;
      
     if(!name || !valor || !sobre || !ingredientes || !categoria ) {
      return res.status(400).json({ error: "é necessário declarar todos os dados"});
     }

      if (!req.file) {
        return res.status(400).json({ error: "Imagem não fornecida" });
      }

      const image = req.file.path;
      
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

  async show(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Acesso negado" });
    }
    
    try {
      const products = await prisma.produtos.findMany();
      res.status(200).json({ products })
    } catch (error) {
      res.status(500).json({ error: "Erro ao tentar exibir produto", details: error });
    }
  }

  async find(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Acesso negado" });
    }

    try {
      const { id } = req.params
      const findProduct = await prisma.produtos.findUnique({
        where: { id },
      })
     res.status(200).json({ findProduct });
    } catch (error) {
      res.status(500).json({ error: "Erro ao tentar exibir produto", details: error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      await prisma.produtos.delete({
        where: {
          id,
        },
      })
      res.status(200).json({ message: "Produto deletado com sucesso!"})
    } catch (error) {
      res.status(401).json({ error: "Erro ao deletar produto"})
    }
  }
}

export { ProdutosController };
