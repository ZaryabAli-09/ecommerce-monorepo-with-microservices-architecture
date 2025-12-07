import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller";
import { shouldBeAdmin } from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/create", createProduct);

router.put("/update/:id", shouldBeAdmin, updateProduct);

router.delete("/delete/:id", shouldBeAdmin, deleteProduct);

router.get("/all", getAllProducts);
router.get("/single/:id", getSingleProduct);

export default router;
