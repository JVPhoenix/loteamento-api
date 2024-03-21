import { FastifyReply, FastifyRequest } from "fastify";
import DeleteLotesService from "../services/DeleteLotesService";

class DeleteLotesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const lotesService = new DeleteLotesService();
    const lotes = await lotesService.execute(data);

    reply.send(lotes);
  }
}

export default DeleteLotesController;
