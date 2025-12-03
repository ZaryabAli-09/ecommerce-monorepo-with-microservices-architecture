import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello from payment service!");
});

async function start() {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
      },
      (info) => {
        console.log("Payments service running on port", `${info.port}`);
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
