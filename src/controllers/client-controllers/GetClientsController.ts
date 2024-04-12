import { FastifyReply, FastifyRequest } from "fastify";
import GetClientService from "../../services/client-services/GetClientsService";

class GetClientsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const clientService = new GetClientService();

    const clients = await clientService.execute();

    reply.send(clients);
  }
}

export default GetClientsController;
