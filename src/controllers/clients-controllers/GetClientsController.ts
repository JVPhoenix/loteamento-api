import { FastifyReply, FastifyRequest } from "fastify";
import GetClientsService from "../../services/clients-services/GetClientsService";

class GetClientsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const clientService = new GetClientsService();

    const clients = await clientService.execute();

    reply.send(clients);
  }
}

export default GetClientsController;
