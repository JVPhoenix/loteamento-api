import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import CreateLotesController from "./controllers/lotes-controllers/CreateLotesController";
import GetLotesController from "./controllers/lotes-controllers/GetLotesController";
import DeleteLotesController from "./controllers/lotes-controllers/DeleteLotesController";
import UpdateLotesController from "./controllers/lotes-controllers/UpdateLotesController";
import GetClientsController from "./controllers/clients-controllers/GetClientsController";
import CreateClientsController from "./controllers/clients-controllers/CreateClientsController";
import DeleteClientsController from "./controllers/clients-controllers/DeleteClientsController";
import UpdateClientController from "./controllers/clients-controllers/UpdateClientsController";
import CreatePhotosController from "./controllers/photos-controllers/CreatePhotosController";
import GetPhotosController from "./controllers/photos-controllers/GetPhotosController";
import DeletePhotosController from "./controllers/photos-controllers/DeletePhotosController";
import UpdatePhotosController from "./controllers/photos-controllers/UpdatePhotosController";
import GetClientsRequestController from "./controllers/clientsRequest-controllers/GetClientsRequestController";
import CreateClientsRequestController from "./controllers/clientsRequest-controllers/CreateClientsRequestController";
import DeleteClientsRequestController from "./controllers/clientsRequest-controllers/DeleteClientsRequestController";
import UpdateClientRequestController from "./controllers/clientsRequest-controllers/UpdateClientsRequestController";

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

  // ------ PHOTOS ROUTES

  fastify.get("/photosData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetPhotosController().handle(request, reply);
  });

  fastify.post("/photosData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreatePhotosController().handle(request, reply);
  });

  fastify.delete("/photosData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeletePhotosController().handle(request, reply);
  });

  fastify.put("/photosData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdatePhotosController().handle(request, reply);
  });

  // ------ CLIENTS REQUESTS ROUTES

  fastify.get("/clientsRequestData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetClientsRequestController().handle(request, reply);
  });

  fastify.post("/clientsRequestData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateClientsRequestController().handle(request, reply);
  });

  fastify.delete("/clientsRequestData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteClientsRequestController().handle(request, reply);
  });

  fastify.put("/clientsRequestData", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateClientRequestController().handle(request, reply);
  });
}
