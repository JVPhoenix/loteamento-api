import { FastifyReply, FastifyRequest } from "fastify";
import { ClientsServiceType } from "../../types";
import UpdateClientsService from "../../services/clients-services/UpdateClientsService";

class UpdateClientController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const clientsService = new UpdateClientsService();
    const client = await clientsService.execute(data as ClientsServiceType);

    reply.send(client);
  }
}

export default UpdateClientController;
