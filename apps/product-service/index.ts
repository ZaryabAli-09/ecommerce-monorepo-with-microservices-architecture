import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Product service running on port", port);
});
