import express, { Request, Response } from "express";
import cors from "cors";
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

app.listen(port, () => {
  console.log("Product service running on port", port);
});
