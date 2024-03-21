import { FastifyReply, FastifyRequest } from "fastify";
import CreateLotesService from "../services/CreateLotesService";
import { LoteServiceType } from "../types";

class CreateLotesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as LoteServiceType;

    const loteService = new CreateLotesService();
    const lotes = await loteService.execute(data);

    reply.send(lotes);
  }
}

export default CreateLotesController;
