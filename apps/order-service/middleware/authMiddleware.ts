import { FastifyReply, FastifyRequest } from "fastify";
import { getAuth } from "@clerk/fastify";
import { CustomJwtSessionClaims } from "@repo/types";

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

export const shouldBeAdmin = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const auth = getAuth(request);
  if (!auth.userId) {
    return reply.status(401).send({ message: "You are not logged in!" });
  }

  const claims = auth.sessionClaims as CustomJwtSessionClaims;

  if (claims.metadata?.role !== "admin") {
    return reply.status(403).send({ message: "Unauthorized!" });
  }

  request.userId = auth.userId;
};
