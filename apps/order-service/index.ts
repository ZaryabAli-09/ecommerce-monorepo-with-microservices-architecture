// import 'dotenv/config'

import Fastify from "fastify";
import { clerkPlugin, getAuth } from "@clerk/fastify";
// instance of Fastify
const fastify = Fastify();

fastify.register(clerkPlugin);

fastify.get("/", (request, reply) => {
  return reply.send("Hello from order service");
});

fastify.get("/test-auth", (request, reply) => {
  try {
    const { isAuthenticated, userId } = getAuth(request);

    if (!isAuthenticated) return reply.status(401).send("Not authenticated");

    return reply.send({ user: userId });
  } catch (error) {
    fastify.log.error(error);
  }
  return reply.send("Hello from order service");
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
