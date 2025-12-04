import { FastifyReply, FastifyRequest } from "fastify";
import { getAuth } from "@clerk/fastify";

declare module "fastify" {
  interface FastifyRequest {
    userId: string;
  }
}

export const shouldBeUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { isAuthenticated, userId } = getAuth(request);
    if (!isAuthenticated || !userId)
      return reply.status(401).send({ message: "Not authenticated" });

    request.userId = userId;
    return true;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
