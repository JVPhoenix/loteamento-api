import { FastifyReply, FastifyRequest } from "fastify";
import UpdateLotesService from "../../services/lotes-services/UpdateLotesService";
import { LoteServiceType } from "../../types";

class UpdateLotesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const lotesService = new UpdateLotesService();
    const lotes = await lotesService.execute(data as LoteServiceType);

    reply.send(lotes);
  }
}

export default UpdateLotesController;
