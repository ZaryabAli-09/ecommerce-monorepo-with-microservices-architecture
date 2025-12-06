import express, { Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import productRouter from "./routes/product.route";
import categoriesRouter from "./routes/category.route";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4000", "http://localhost:4001"],
  })
);
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  console.log("working");
  res.json("Hello from product service");
});

app.use(clerkMiddleware());

app.get("/test-auth", (req: Request, res: Response) => {
  const auth = getAuth(req);
  const { userId, isAuthenticated } = auth;
  console.log(isAuthenticated);

  if (!userId || !isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json({ message: "Product service authenticated", data: auth });
});

app.use("/product", productRouter);
app.use("/categories", categoriesRouter);

app.use((err: any, req: Request, res: Response) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

app.listen(port, () => {
  console.log("Product service running on port", port);
});
