import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { cors } from "hono/cors";
const app = new Hono();

app.use("*", clerkMiddleware());
app.use(
  "*",
  cors({ origin: ["http://localhost:4001", "http://localhost:4000"] })
);

app.get("/health", (c) => {
  return c.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// app.route("/sessions", sessionRoute);
// app.route("/webhooks", webhookRoute);

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
