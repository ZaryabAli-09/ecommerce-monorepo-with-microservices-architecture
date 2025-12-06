import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller";

const router: Router = Router();

router.post("/create", createProduct);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id", deleteProduct);

router.get("/all", getAllProducts);
router.get("/single/:id", getSingleProduct);

export default router;
