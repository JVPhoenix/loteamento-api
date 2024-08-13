import { FastifyReply, FastifyRequest } from "fastify";
import { ClientsRequestServiceType } from "../../types";
import UpdateClientsRequestService from "../../services/clientsRequest-services/UpdateClientsRequestService";

class UpdateClientRequestController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const clientsRequestService = new UpdateClientsRequestService();
    const clientRequest = await clientsRequestService.execute(data as ClientsRequestServiceType);

    reply.send(clientRequest);
  }
}

export default UpdateClientRequestController;
