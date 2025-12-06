import { prisma, Prisma } from "@repo/product-db";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;

    console.log(name, slug);
    // Validation
    if (!name || !slug) {
      return res.status(400).json({
        message: "Missing required fields",
        required: ["name", "slug"],
      });
    }

    const data: Prisma.CategoryCreateInput = {
      name,
      slug,
    };

    const category = await prisma.category.create({
      data,
    });

    return res.status(201).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error creating category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
export const updateCategory = async (req: Request, res: Response) => {};

export const deleteCategory = async (req: Request, res: Response) => {};

export const getAllCategories = async (req: Request, res: Response) => {};
