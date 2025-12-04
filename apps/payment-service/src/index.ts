import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
const app = new Hono();

app.use("*", clerkMiddleware());

app.get("/", (c) => {
  return c.text("Hello from payment service!");
});

app.get("/test-auth", async (c) => {
  try {
    const auth = getAuth(c);

    if (!auth?.userId) return c.text("Not authenticated");
    console.log(auth.userId);
    return c.text("Authenticated");
  } catch (error) {
    console.log(error);
  }
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
