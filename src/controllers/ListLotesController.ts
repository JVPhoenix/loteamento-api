import { FastifyReply, FastifyRequest } from "fastify";
import ListLotesService from "../services/ListLotesService";

class ListLotesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const lotesService = new ListLotesService();

    const lotes = await lotesService.execute();

    reply.send(lotes);
  }
}

export default ListLotesController;
