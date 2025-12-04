import dotenv from "dotenv";
import Fastify from "fastify";
import { clerkPlugin, getAuth } from "@clerk/fastify";
import { shouldBeUser } from "./middleware/authMiddleware.js";
// instance of Fastify
const fastify = Fastify();

fastify.register(clerkPlugin);

fastify.get("/", (request, reply) => {
  return reply.send("Hello from order service");
});

fastify.get("/test-auth", { preHandler: shouldBeUser }, (request, reply) => {
  console.log("helllooo");
  return reply.send({
    message: "Order service authenticated",
    userId: request.userId,
  });
});

// Running the server!
const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
