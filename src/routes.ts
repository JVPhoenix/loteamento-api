import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import CreateLotesController from "./controllers/CreateLotesController";
import ListLotesController from "./controllers/ListLotesController";
import DeleteLotesController from "./controllers/DeleteLotesController";
import UpdateLotesController from "./controllers/UpdateLotesController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/lotesData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListLotesController().handle(request, reply);
  });

  fastify.post("/lotesData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateLotesController().handle(request, reply);
  });

  fastify.delete("/lotesData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteLotesController().handle(request, reply);
  });

  fastify.put("/lotesData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateLotesController().handle(request, reply);
  });
}
