import express, { Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.json("Hello from product service");
});

app.use(clerkMiddleware());

app.get("/test-auth", (req: Request, res: Response) => {
  const auth = getAuth(req);
  const { userId, isAuthenticated } = auth;
  console.log(auth);

  if (!userId || !isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json({ message: "Product service authenticated", data: auth });
});

app.listen(port, () => {
  console.log("Product service running on port", port);
});
