import { FastifyReply, FastifyRequest } from "fastify";
import DeleteClientsRequestService from "../../services/clientsRequest-services/DeleteClientsRequestService";

class DeleteClientsRequestController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const clientRequestService = new DeleteClientsRequestService();
    const clientsRequest = await clientRequestService.execute(data);

    reply.send(clientsRequest);
  }
}

export default DeleteClientsRequestController;
