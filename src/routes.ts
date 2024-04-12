import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import CreateLotesController from "./controllers/lotes-controllers/CreateLotesController";
import GetLotesController from "./controllers/lotes-controllers/GetLotesController";
import DeleteLotesController from "./controllers/lotes-controllers/DeleteLotesController";
import UpdateLotesController from "./controllers/lotes-controllers/UpdateLotesController";
import GetClientsController from "./controllers/client-controllers/GetClientsController";
import CreateClientsController from "./controllers/client-controllers/CreateClientsController";
import DeleteClientsController from "./controllers/client-controllers/DeleteClientsController";
import UpdateClientController from "./controllers/client-controllers/UpdateClientsController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // ------- LOTES ROUTES

  fastify.get("/lotesData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetLotesController().handle(request, reply);
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

  // ------ CLIENTS ROUTES

  fastify.get("/clientsData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetClientsController().handle(request, reply);
  });

  fastify.post("/clientsData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateClientsController().handle(request, reply);
  });

  fastify.delete("/clientsData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteClientsController().handle(request, reply);
  });

  fastify.put("/clientsData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateClientController().handle(request, reply);
  });
}
