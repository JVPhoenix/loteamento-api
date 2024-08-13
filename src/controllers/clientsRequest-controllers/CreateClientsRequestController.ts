import { FastifyReply, FastifyRequest } from "fastify";
import { ClientsRequestServiceType } from "../../types";
import CreateClientsRequestService from "../../services/clientsRequest-services/CreateClientsRequestService";

class CreateClientsRequestController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as ClientsRequestServiceType;

    const clientsRequestService = new CreateClientsRequestService();
    const clientsRequest = await clientsRequestService.execute(data);

    reply.send(clientsRequest);
  }
}

export default CreateClientsRequestController;
