import { prisma } from "../lib/prisma";
import type { Response, Request } from "express";
import { v2 as cloudinary } from "cloudinary";

class ProdutosController {
  async create(req: Request, res: Response) {
    try {
      const { name, valor, sobre, ingredientes, categoria } = req.body;

      if (!name || !valor || !sobre || !ingredientes || !categoria) {
        return res.status(400).json({
          error: "É necessário declarar todos os dados"
        });
      }

      if (!req.file) {
        return res.status(400).json({
          error: "Imagem não fornecida"
        });
      }

      const image = req.file.path;
      const imagePublicId = req.file.filename;

      const produto = await prisma.produtos.create({
        data: {
          name,
          valor: Number(valor),
          sobre,
          image,
          imagePublicId,
          ingredientes: JSON.parse(ingredientes),
          categoria
        }
      });

      return res.status(201).json({
        message: "Produto criado com sucesso",
        produto
      });

    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "Erro interno ao criar produto"
      });
    }
  }

  async show(req: Request, res: Response) {

    try {

      const products = await prisma.produtos.findMany();

      return res.status(200).json({ products });

    } catch (error) {

      return res.status(500).json({
        error: "Erro ao listar produtos"
      });

    }
  }

  async find(req: Request, res: Response) {

    try {

      const { id } = req.params;

      const product = await prisma.produtos.findUnique({
        where: { id }
      });

      if (!product) {
        return res.status(404).json({
          error: "Produto não encontrado"
        });
      }

      return res.status(200).json(product);

    } catch (error) {

      return res.status(500).json({
        error: "Erro ao buscar produto"
      });

    }
  }

  async delete(req: Request, res: Response) {

    try {
      const { id } = req.params;

      const product = await prisma.produtos.findUnique({
        where: { id }
      });

      if (!product) {
        return res.status(404).json({
          error: "Produto não encontrado"
        });
      }

      if (product.imagePublicId) {
          await cloudinary.uploader.destroy(product.imagePublicId);
        }
        
      await prisma.produtos.delete({
        where: { id }
      });

      return res.status(200).json({
        message: "Produto deletado com sucesso"
      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        error: "Erro ao deletar produto"
      });

    }
  }

  async update(req: Request, res: Response) {

    try {

      const { id } = req.params;
      const { name, valor, sobre, ingredientes, categoria } = req.body;

      const product = await prisma.produtos.findUnique({
        where: { id }
      });

      if (!product) {
        return res.status(404).json({
          error: "Produto não encontrado"
        });
      }

      let image = product.image;
      let imagePublicId = product.imagePublicId;

      if (req.file) {
        if (product.imagePublicId) {
          await cloudinary.uploader.destroy(product.imagePublicId);
        }

        image = req.file.path;
        imagePublicId = req.file.filename;
      }

      const updatedProduct = await prisma.produtos.update({
        where: { id },
        data: {
          name: name ?? product.name,
          valor: valor ? Number(valor) : product.valor,
          sobre: sobre ?? product.sobre,
          categoria: categoria ?? product.categoria,
          ingredientes: ingredientes
            ? JSON.parse(ingredientes)
            : product.ingredientes,
          image,
          imagePublicId
        }
      });

      return res.status(200).json({
        message: "Produto atualizado com sucesso",
        updatedProduct
      });

    } catch (error) {

      // console.error(error);

      return res.status(500).json({
        error: "Erro ao atualizar produto",
        message: error
      });

    }
  }

}

export { ProdutosController };