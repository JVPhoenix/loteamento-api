import { FastifyReply, FastifyRequest } from "fastify";
import DeleteClientsService from "../../services/client-services/DeleteClientsService";

class DeleteClientsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const clientService = new DeleteClientsService();
    const lotes = await clientService.execute(data);

    reply.send(lotes);
  }
}

export default DeleteClientsController;
