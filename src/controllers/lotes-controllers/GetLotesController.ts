import { FastifyReply, FastifyRequest } from "fastify";
import GetLotesService from "../../services/lotes-services/GetLotesService";

class GetLotesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const lotesService = new GetLotesService();

    const lotes = await lotesService.execute();

    reply.send(lotes);
  }
}

export default GetLotesController;
