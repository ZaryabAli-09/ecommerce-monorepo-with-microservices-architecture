import { Router } from "express";
import { createCategory } from "../controllers/category.controller";

const router: Router = Router();

router.post("/create", createCategory);

// router.put("/update/:id", updateProduct);

// router.delete("/delete/:id", deleteProduct);

// router.get("/all", getAllProducts);
// router.get("/single/:id", getSingleProduct);

export default router;
