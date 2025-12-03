import Fastify from "fastify";

// instance of Fastify
const fastify = Fastify();

// Running the server!
try {
  await fastify.listen({ port: 8001 });
  console.log("Order service running on port 8001");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
