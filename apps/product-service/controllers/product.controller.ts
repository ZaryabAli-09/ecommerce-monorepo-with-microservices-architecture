import { Request, Response } from "express";
import { Prisma, prisma } from "@repo/product-db";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data: Prisma.ProductCreateInput = req.body;

    const { colors, images } = data;
    if (!colors || !Array.isArray(colors) || colors.length === 0) {
      return res.status(400).json({ message: "Colors array is required!" });
    }

    if (!images || typeof images !== "object") {
      return res.status(400).json({ message: "Images object is required!" });
    }

    const missingColors = colors.filter((color) => !(color in images));

    if (missingColors.length > 0) {
      return res
        .status(400)
        .json({ message: "Missing images for colors!", missingColors });
    }

    const product = await prisma.product.create({ data });

    // const stripeProduct: StripeProductType = {
    //   id: product.id.toString(),
    //   name: product.name,
    //   price: product.price,
    // };

    // producer.send("product.created", { value: stripeProduct });
    res.status(201).json(product);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: Prisma.ProductUpdateInput = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });

    return res.status(200).json(updatedProduct);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedProduct = await prisma.product.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json(deletedProduct);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { sort, category, search, limit } = req.query;

    const orderBy = (() => {
      switch (sort) {
        case "asc":
          return { price: Prisma.SortOrder.asc };
          break;
        case "desc":
          return { price: Prisma.SortOrder.desc };
          break;
        case "oldest":
          return { createdAt: Prisma.SortOrder.asc };
          break;
        default:
          return { createdAt: Prisma.SortOrder.desc };
          break;
      }
    })();

    const products = await prisma.product.findMany({
      where: {
        category: {
          slug: category as string,
        },
        name: {
          contains: search as string,
          mode: "insensitive",
        },
      },
      orderBy,
      take: limit ? Number(limit) : undefined,
    });

    res.status(200).json(products);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    return res.status(200).json(product);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
