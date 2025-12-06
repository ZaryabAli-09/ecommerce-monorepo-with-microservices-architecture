import { Request, Response } from "express";
import { Prisma, prisma } from "@repo/product-db";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data: Prisma.ProductCreateInput = req.body;

    const product = await prisma.product.create({
      data,
    });

    return res.status(201).json(product);
  } catch (error) {}
};
export const updateProduct = async (req: Request, res: Response) => {};

export const deleteProduct = async (req: Request, res: Response) => {};

export const getAllProducts = async (req: Request, res: Response) => {};
export const getSingleProduct = async (req: Request, res: Response) => {};
