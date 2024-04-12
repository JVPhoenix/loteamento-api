import { FastifyReply, FastifyRequest } from "fastify";
import { ClientsServiceType } from "../../types";
import CreateClientsService from "../../services/client-services/CreateClientsService";

class CreateClientsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as ClientsServiceType;

    const clientsService = new CreateClientsService();
    const clients = await clientsService.execute(data);

    reply.send(clients);
  }
}

export default CreateClientsController;
