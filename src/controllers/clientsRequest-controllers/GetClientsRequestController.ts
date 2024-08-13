import { FastifyReply, FastifyRequest } from "fastify";
import GetClientsRequestService from "../../services/clientsRequest-services/GetClientsRequestService";

class GetClientsRequestController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const clientRequestService = new GetClientsRequestService();

    const clientsRequest = await clientRequestService.execute();

    reply.send(clientsRequest);
  }
}

export default GetClientsRequestController;
